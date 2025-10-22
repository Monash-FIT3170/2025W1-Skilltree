"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export interface CreateCommunityData {
  name: string;
  description: string;
  tags: string[];
  pfp?: File | null;
  // optional nested tree payload produced by reactFlowToBackendTree
  skillTree?: BackendSkillNode | null;
}

type BackendSkillNode = {
  id: string;
  name: string;
  description?: string;
  xpPoint?: number;
  unlocked?: boolean;
  children?: BackendSkillNode[];
};

export async function createCommunityAction(data: CreateCommunityData) {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  const apiBase = process.env.API_URL?.replace(/\/$/, "") ?? "";

  try {
    // backend expects JSON { name, description }
    const treeRes = await fetch(`${apiBase}/skilltree`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      // send only the properties accepted by /skilltree
      //TODO: add tags, restricted?
      body: JSON.stringify({
        name: data.name,
        description: data.description,
      }),
    });

    if (!treeRes.ok) {
      const text = await treeRes.text().catch(() => "");
      console.error(
        "createCommunityAction: /skilltree failed",
        treeRes.status,
        text
      );
      return {
        ok: false,
        status: treeRes.status,
        message: text || "Failed to create skilltree",
      };
    }

    const raw = await treeRes.json().catch(() => ({}));
    const treeData = raw?.message ?? raw; 
    const createdSkillTreeId =
      treeData?.id ?? treeData?.skillTreeId ?? treeData?.data?.id ?? null;

    // for debugging
    console.log("createCommunityAction: /skilltree raw response:", raw);
    console.log("createCommunityAction: /skilltree unwrapped:", treeData);
    console.log(
      "createCommunityAction: createdSkillTreeId =",
      createdSkillTreeId
    );

    // create skill nodes via /skill-node
    if (data.skillTree && createdSkillTreeId) {
      // collect nodes in parent-first order
      const nodesToCreate: Array<{
        clientId: string;
        name: string;
        description?: string;
        xpPoint?: number;
        parentClientId?: string | null;
      }> = [];

      console.log("createCommunityAction: collecting nodes");
      const collect = (
        node: BackendSkillNode,
        parentClientId: string | null = null
      ) => {
        nodesToCreate.push({
          clientId: node.id,
          name: node.name,
          description: node.description,
          xpPoint: node.xpPoint,
          parentClientId,
        });
        (node.children ?? []).forEach((c) => collect(c, node.id));
      };
      collect(data.skillTree, null);

      console.log(
        "createCommunityAction: nodesToCreate.length =",
        nodesToCreate.length
      );

      const clientToServer = new Map<string, string>();

      for (const n of nodesToCreate) {
        const body = {
          name: n.name,
          description: n.description ?? "",
          xpPoint: n.xpPoint ?? 0,
          skillTreeId: createdSkillTreeId,
          parentNodeId: n.parentClientId
            ? clientToServer.get(n.parentClientId) ?? null
            : null,
        };

        // for debugging
        console.log("createCommunityAction: POST /skill-node ->", body);

        const nodeRes = await fetch(`${apiBase}/skill-node`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify(body),
        });

        // parse JSON wrapper
        const rawNode = await nodeRes.json().catch(() => null);
        console.log(
          "createCommunityAction: /skill-node raw response =",
          rawNode
        );

        if (!nodeRes.ok) {
          console.warn(
            "create skill-node failed:",
            nodeRes.status,
            rawNode ?? (await nodeRes.text().catch(() => null))
          );
          continue;
        }

        const nodeData = rawNode?.message ?? rawNode;
        console.log("createCommunityAction: /skill-node unwrapped =", nodeData);

        const serverId =
          nodeData?.id ?? nodeData?.skillNode?.id ?? nodeData?.data?.id ?? null;
        if (serverId) {
          clientToServer.set(n.clientId, serverId);
          console.log(
            "createCommunityAction: mapped clientId->serverId",
            n.clientId,
            "->",
            serverId
          );
        } else {
          console.warn(
            "createCommunityAction: no id in node response",
            nodeData
          );
        }
      }

      // for debugging
      console.log(
        "createCommunityAction: clientToServer map size =",
        clientToServer.size
      );
    } else {
      // for debugging
      if (!data.skillTree) {
        console.log(
          "createCommunityAction: no skillTree payload provided, skipping node creation"
        );
      } else if (!createdSkillTreeId) {
        console.log(
          "createCommunityAction: no createdSkillTreeId, skipping node creation"
        );
      }
    }

    // revalidate relevant pages
    revalidatePath("/dashboard", "page");
    revalidatePath("/discover", "page");
    revalidatePath("/community/add", "page");

    // return structured success 
    return { ok: true, data: treeData, createdSkillTreeId };
  } catch (error: any) {
    console.error("Error creating community (exception):", error);
    return {
      ok: false,
      message:
        error?.message ?? "Failed to create community. Please try again.",
    };
  }
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getCommunityAction, TSkillTree } from "@/actions/get-community-action";
import CommonError from "@/components/CommonError";
import CommunitySkillTree from "@/components/CommunitySkillTree";

type PageProps = {
  params: Promise<{ id: string }>;
};

type FlatNode = { id: string; name: string; parentId: string | null };

function buildRootSkill(community: TSkillTree) {
  const flat: FlatNode[] = community.skillNodes.map((n: any) => ({
    id: String(n.id),
    name: n.name,
    parentId: n.parentId == null ? null : String(n.parentId),
  }));

  const byParent = new Map<string | null, FlatNode[]>();
  for (const n of flat) {
    const key = n.parentId;
    if (!byParent.has(key)) byParent.set(key, []);
    byParent.get(key)!.push(n);
  }

  const toNode = (n: FlatNode): any => ({
    id: n.id,
    label: n.name,
    unlocked: true,
    children: (byParent.get(n.id) ?? []).map(toNode),
  });

  const roots = byParent.get(null) ?? [];
  return {
    id: "root",
    label: community.name,
    unlocked: true,
    children: roots.map(toNode),
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const res = await getCommunityAction(id);
  if (!res.ok) return <CommonError errorDescription="Community not found" />;

  const community = res.message as TSkillTree;
  const rootSkill = buildRootSkill(community);

  return (
    <div className="p-6">
      <div className="flex flex-col items-center gap-4 mb-4">
          <h1 className="text-3xl font-bold">{community.name} Community Tree</h1>

        {/* Back to community */}
        <Link href={`/community/${community.id}`}>
          <Button>← Back to Community</Button>
        </Link>
      </div>

      <CommunitySkillTree rootSkill={rootSkill} />
    </div>
  );
}

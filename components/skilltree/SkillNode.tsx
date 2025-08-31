// components/skilltree/SkillNode.tsx
"use client";

import React from "react";
import type { NodeProps } from "@xyflow/react";
import { Handle, Position } from "@xyflow/react";
import { Check, Lock, Unlock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SkillNodeData } from "./types";

type Props = NodeProps;

const SkillNode: React.FC<Props> = ({ id, data, selected }) => {
  const nodeId = String(id);
  const d = (data ?? {}) as SkillNodeData;

  const status = d.status ?? "locked";
  const isCompleted = status === "completed";
  const isUnlocked = status === "unlocked";
  const isLocked = status === "locked";

  const [desc, setDesc] = React.useState<string>((d as any).description ?? "");
  React.useEffect(() => {
    setDesc((d as any).description ?? "");
  }, [(d as any).description]);

  return (
    <div
      className={cn(
        "rounded-lg bg-card text-card-foreground shadow-sm w-[260px] transition",
        "border-2", // base thickness for all nodes
        selected && "ring-2 ring-primary",
        // ✅ Primary border only when NOT completed
        d.isPrimary && !isCompleted && "border-2 border-red-500",
        // ✅ Completed wins and becomes the normal green like others
        isCompleted && "border-green-500",
        isLocked && "opacity-90"
      )}
    >
      {/* Header: title + XP */}
      <div className="flex items-center justify-between px-3 py-2 border-b gap-2">
        <input
          className={cn(
            "nodrag nowheel",
            "w-full bg-transparent outline-none",
            "font-medium text-sm"
          )}
          value={d.title ?? ""}
          placeholder="Untitled"
          aria-label="Node title"
          onChange={(e) => d.onRename?.(nodeId, e.target.value)}
          onMouseDown={(e) => e.stopPropagation()}
        />
        <div className="flex items-center gap-1 shrink-0">
          <input
            id={`xp-${nodeId}`}
            className={cn(
              "nodrag nowheel",
              "w-16 bg-transparent outline-none border rounded px-2 py-1 text-center text-xs"
            )}
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="0"
            value={d.xp === undefined ? "" : String(d.xp)}
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, "");
              const next = digits === "" ? 0 : parseInt(digits, 10);
              d.onChangeXp?.(nodeId, isNaN(next) ? 0 : next);
            }}
            onMouseDown={(e) => e.stopPropagation()}
            aria-label="XP"
            title="XP"
          />
          <span className="text-[10px] text-muted-foreground">XP</span>
        </div>
      </div>

      {/* Description */}
      <div className="px-3 py-2">
        <label className="sr-only" htmlFor={`desc-${nodeId}`}>
          Description
        </label>
        <textarea
          id={`desc-${nodeId}`}
          className={cn(
            "nodrag nowheel",
            "w-full bg-transparent outline-none border rounded px-2 py-1 text-xs resize-none"
          )}
          rows={2}
          placeholder="Add a description..."
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
            (d as any).onChangeDescription?.(nodeId, e.target.value);
          }}
          onBlur={() => (d as any).onChangeDescription?.(nodeId, desc)}
          onMouseDown={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-3 py-2 border-t">
        <div className="flex items-center gap-2 text-xs">
          {isCompleted ? (
            <Check className="h-4 w-4" />
          ) : isUnlocked ? (
            <Unlock className="h-4 w-4" />
          ) : (
            <Lock className="h-4 w-4" />
          )}
          <span
            className={cn(
              isCompleted && "text-green-600",
              isUnlocked && "text-foreground",
              isLocked && "text-muted-foreground"
            )}
          >
            {isCompleted ? "Completed" : isUnlocked ? "Unlocked" : "Locked"}
          </span>
        </div>

        <button
          type="button"
          disabled={isCompleted || isLocked}
          aria-disabled={isCompleted || isLocked}
          onClick={() => {
            if (!isUnlocked) return;
            d.onComplete?.(nodeId);
          }}
          className={cn(
            "rounded-md text-xs px-2 py-1 border",
            isUnlocked &&
              "bg-primary text-primary-foreground border-primary hover:opacity-90",
            (isCompleted || isLocked) &&
              "bg-muted text-muted-foreground cursor-not-allowed"
          )}
        >
          Mark done
        </button>
      </div>

      <Handle type="source" position={Position.Top} />
      <Handle type="target" position={Position.Bottom} />
    </div>
  );
};

export default SkillNode;

// components/skilltree/SkillNode.tsx
'use client';

import React from 'react';
import type { NodeProps } from '@xyflow/react';
import { Handle, Position } from '@xyflow/react';
import { Check, Lock, Unlock } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SkillNodeData } from './types';

// Version-agnostic: keep NodeProps unparameterized and narrow locally
type Props = NodeProps;

const SkillNode: React.FC<Props> = ({ id, data, selected }) => {
  const nodeId = String(id);
  const d = (data ?? {}) as SkillNodeData;

  const status = d.status ?? 'locked';
  const isCompleted = status === 'completed';
  const isUnlocked = status === 'unlocked';
  const isLocked = status === 'locked';

  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm w-[260px] transition',
        selected ? 'ring-2 ring-primary' : '',
        isCompleted && 'border-green-500',
        isLocked && 'opacity-90'
      )}
    >
      {/* Header: editable title */}
      <div className="flex items-center justify-between px-3 py-2 border-b gap-2">
        <input
          className={cn(
            'nodrag nowheel',
            'w-full bg-transparent outline-none',
            'font-medium text-sm'
          )}
          value={d.title ?? ''}
          placeholder="Untitled"
          onChange={(e) => d.onRename?.(nodeId, e.target.value)}
          onMouseDown={(e) => e.stopPropagation()} // don't drag while typing
        />
        {d.isPrimary && (
          <span className="text-xs rounded bg-primary/10 text-primary px-2 py-0.5 shrink-0">
            Primary
          </span>
        )}
      </div>

      {/* Description (optional) */}
      <div className="px-3 py-2 text-sm min-h-[54px]">
        {d.description ? <p className="text-muted-foreground">{d.description}</p> : null}
      </div>

      {/* Footer: status + action */}
      <div className="flex items-center justify-between px-3 py-2 border-t">
        <div className="flex items-center gap-2 text-xs">
          {isCompleted ? <Check className="h-4 w-4" /> : isUnlocked ? <Unlock className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
          <span
            className={cn(
              isCompleted && 'text-green-600',
              isUnlocked && 'text-foreground',
              isLocked && 'text-muted-foreground'
            )}
          >
            {isCompleted ? 'Completed' : isUnlocked ? 'Unlocked' : 'Locked'}
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
            'rounded-md text-xs px-2 py-1 border',
            isUnlocked && 'bg-primary text-primary-foreground border-primary hover:opacity-90',
            (isCompleted || isLocked) && 'bg-muted text-muted-foreground cursor-not-allowed'
          )}
        >
          Mark done
        </button>
      </div>

      {/* handles: child -> parent (edge up), so source on top, target on bottom */}
      <Handle type="source" position={Position.Top} />
      <Handle type="target" position={Position.Bottom} />
    </div>
  );
};

export default SkillNode;

'use client';

import { NodeProps, Handle, Position, XYPosition } from '@xyflow/react';
import { Check, Lock, Unlock } from 'lucide-react';
import { cn } from '@/lib/utils'; // shadcn util; if you don't have it, swap with a simple join
import type { SkillNodeData } from './types';

export default function SkillNode({ id, data, selected }: NodeProps<{ id: string; position: XYPosition; data: SkillNodeData }>) {
  const nodeId = id as string;
  const skillData = data;
  const status = skillData.status ?? 'locked';
  const isCompleted = status === 'completed';
  const isUnlocked = status === 'unlocked';
  const isLocked = status === 'locked';

  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm w-[220px] transition',
        selected ? 'ring-2 ring-primary' : '',
        isCompleted && 'border-green-500',
        isLocked && 'opacity-70'
      )}
    >
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <div className="font-medium truncate">{skillData.title}</div>
        {skillData.isPrimary && (
          <span className="text-xs rounded bg-primary/10 text-primary px-2 py-0.5">Primary</span>
        )}
      </div>
      <div className="px-3 py-2 text-sm min-h-[54px]">
        {skillData.description ? <p className="text-muted-foreground">{skillData.description}</p> : null}
      </div>
      <div className="flex items-center justify-between px-3 py-2 border-t">
        <div className="flex items-center gap-2 text-xs">
          {isCompleted ? <Check className="h-4 w-4" /> : isUnlocked ? <Unlock className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
          <span className={cn(
            isCompleted && 'text-green-600',
            isUnlocked && 'text-foreground',
            isLocked && 'text-muted-foreground'
          )}>
            {isCompleted ? 'Completed' : isUnlocked ? 'Unlocked' : 'Locked'}
          </span>
        </div>
        <button
          className={cn(
            'rounded-md text-xs px-2 py-1 border',
            isUnlocked && 'bg-primary text-primary-foreground border-primary hover:opacity-90',
            (isCompleted || isLocked) && 'bg-muted text-muted-foreground cursor-not-allowed'
          )}
          onClick={() => skillData.onComplete?.(nodeId)}
        >
          Mark done
        </button>
      </div>
      {/* handles: child -> parent (edge up), so source on top, target on bottom */}
      <Handle type="source" position={Position.Top} />
      <Handle type="target" position={Position.Bottom} />
    </div>
  );
}

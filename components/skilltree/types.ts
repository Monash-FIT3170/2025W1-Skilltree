// components/skill-tree/types.ts
import type { Edge, Node } from '@xyflow/react';

export type SkillStatus = 'locked' | 'unlocked' | 'completed';

export type SkillNodeData = {
  title: string;
  description?: string;
  isPrimary?: boolean;
  // injected/derived at runtime:
  status?: SkillStatus;
  onComplete?: (id: string) => void | Promise<void>;
};

export type SkillTreeDTO = {
  nodes: Node<SkillNodeData>[];  // ids unique; positions optional (layout will set)
  edges: Edge[];                  // semantics: child -> parent
  completedIds: string[];         // provided by backend
};

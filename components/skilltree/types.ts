import type { Edge, Node } from '@xyflow/react';

export type SkillStatus = 'locked' | 'unlocked' | 'completed';

export type SkillNodeData = {
  title: string;
  description?: string;
  isPrimary?: boolean;
  // injected/derived at runtime:
  status?: SkillStatus;
  onComplete?: (id: string) => void;
};

export type SkillTreeDTO = {
  nodes: Node<SkillNodeData>[];
  edges: Edge[];
  completedIds: string[]; // provided by backend
};
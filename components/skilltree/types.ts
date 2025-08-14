// components/skilltree/types.ts
import type { Edge, Node } from '@xyflow/react';

export type SkillStatus = 'locked' | 'unlocked' | 'completed';

export type SkillNodeData = {
  title: string;
  description?: string;
  isPrimary?: boolean;
  // injected/derived at runtime:
  status?: SkillStatus;
  onComplete?: (id: string) => void | Promise<void>;
  onRename?: (id: string, title: string) => void;
  onChangeDescription?: (id: string, description: string) => void; // ⬅️ NEW
};

export type SkillTreeDTO = {
  nodes: Node<SkillNodeData>[];  // ids unique; positions optional (layout will set)
  edges: Edge[];                  // semantics: child -> parent
  completedIds: string[];         // provided by backend
};

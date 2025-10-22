// components/skilltree/types.ts
import type { Edge, Node } from '@xyflow/react';

export type SkillStatus = 'locked' | 'unlocked' | 'completed';

export type SkillNodeData = {
  onChangeDescription: (id: string, description: string) => void;
  title: string;
  isPrimary?: boolean;
  xp?: number;
  description?: string;

  // this will be injected at runtime:
  status?: SkillStatus;
  onComplete?: (id: string) => void | Promise<void>;
  onRename?: (id: string, title: string) => void;
  onChangeXp?: (id: string, xp: number) => void;
};

export type SkillTreeDTO = {
  nodes: Node<SkillNodeData>[]; 
  edges: Edge[];                 // child parents??
  completedIds: string[];         // given by back end
};

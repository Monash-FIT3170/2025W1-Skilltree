'use client';

import SkillTree from '@/components/skilltree/SkillTree';
import type { SkillTreeDTO } from '@/components/skilltree/types';

// Example graph:
// Edges are child -> parent (complete children to unlock parent/root)
const demo: SkillTreeDTO = {
  nodes: [
    { id: 'root', type: 'skill', data: { title: 'Community Primary', isPrimary: true }, position: { x: 0, y: 0 } },
    { id: 'n1',   type: 'skill', data: { title: 'Basics' }, position: { x: 0, y: 0 } },
    { id: 'n2',   type: 'skill', data: { title: 'Etiquette' }, position: { x: 0, y: 0 } },
    { id: 'n3',   type: 'skill', data: { title: 'Moderation' }, position: { x: 0, y: 0 } },
    { id: 'n2a',  type: 'skill', data: { title: 'Posts' }, position: { x: 0, y: 0 } },
    { id: 'n2b',  type: 'skill', data: { title: 'Replies' }, position: { x: 0, y: 0 } },
  ],
  edges: [
    { id: 'e-n1-root', source: 'n1', target: 'root' },
    { id: 'e-n2-root', source: 'n2', target: 'root' },
    { id: 'e-n3-root', source: 'n3', target: 'root' },
    { id: 'e-n2a-n2',  source: 'n2a', target: 'n2' },
    { id: 'e-n2b-n2',  source: 'n2b', target: 'n2' },
  ],
  completedIds: [], // simulate backend completion set
};

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Skill Tree</h1>
      <SkillTree
        initial={demo}
        onComplete={async (id) => {
          // Wire this to your backend:
          // await fetch(`/api/skilltrees/{id}/complete`, { method: 'POST', body: JSON.stringify({ nodeId: id }) })
          console.log('completed ->', id);
        }}
      />
      <p className="text-sm text-muted-foreground mt-3">
        Tip: complete leaf nodes first; parents unlock when all their children are completed (root unlocks when all its direct children are completed).
      </p>
    </div>
  );
}

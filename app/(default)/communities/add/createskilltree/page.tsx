'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import SkillTree from '@/components/skilltree/SkillTree';
import type { SkillTreeDTO } from '@/components/skilltree/types';

function makeId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return (crypto as Crypto).randomUUID().slice(0, 8);
  }
  return Math.random().toString(36).slice(2, 10);
}

export default function Page() {
  const router = useRouter();

  const communityName = 'Community'; // fixed here since this route has no [community] param

  const initial: SkillTreeDTO = {
    nodes: [], // SkillTree will ensure a root named by communityName
    edges: [],
    completedIds: [],
  };

  const handleCreate = useCallback(() => {
    const id = makeId();
    router.push(`/communities/${id}/skilltree`); // route groups like (default) don't appear in the URL
  }, [router]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 max-h-[calc(100vh-8rem)] overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">{communityName} — Skill Tree</h1>
        <button
          onClick={handleCreate}
          className="px-3 py-2 rounded-md border bg-primary text-primary-foreground hover:opacity-90"
        >
          Create skilltree
        </button>
      </div>

      <SkillTree communityName={communityName} initial={initial} />
    </div>
  );
}
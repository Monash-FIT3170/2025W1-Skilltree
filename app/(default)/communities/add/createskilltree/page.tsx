
import SkillTree from '@/components/skilltree/SkillTree';
import type { SkillTreeDTO } from '@/components/skilltree/types';

type PageProps = {
  params: { community: string };
};

export default async function Page({ params }: PageProps) {
  const communitySlug = decodeURIComponent(params.community);
  const communityName =
    communitySlug
      .split('-')
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ') || 'Community';

  // TODO: fetch real data for this community
  const initial: SkillTreeDTO = {
    nodes: [], // can be empty; SkillTree will ensure a root named by `communityName`
    edges: [],
    completedIds: [],
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 max-h-[calc(100vh-8rem)] overflow-hidden">
      <h1 className="text-2xl font-semibold">{communityName} — Skill Tree</h1>
      <SkillTree communityName={communityName} initial={initial} />
    </div>
  );
}

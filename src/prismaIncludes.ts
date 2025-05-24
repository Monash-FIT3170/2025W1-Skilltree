export const userSelect = {
  id: true,
  email: true,
  hash: true,
  createdAt: true,
  updatedAt: true,

  createdCommunities: true,
  adminOfCommunities: true,
  verifiedInCommunities: true,
  posts: true,
  skillForests: true,
  followedSkillForests: true,
  experiences: true,
  leaderboardEntries: true,
  feedback: true,
  events: true,
};

export const communitySelect = {
  id: true,
  name: true,
  skill: true,
  icon: true,
  tags: true,
  description: true,
  communityExperience: true,
  creatorId: true,
  createdAt: true,
  updatedAt: true,

  creator: true,
  admins: true,
  users: true,
  skillTreeNodes: true,
  posts: true,
  skillForests: true,
  experiences: true,
  leaderboards: true,
  events: true,
};

export const skilltreeNodeSelect = {
  id: true,
  name: true,
  communityId: true,
  experienceId: true,
  nextId: true,
  createdAt: true,
  updatedAt: true,

  community: true,
  experience: true,
  next: true,
  previous: true,
};

export const postSelect = {
  id: true,
  text: true,
  attachment: true,
  communityId: true,
  authorId: true,
  createdAt: true,
  updatedAt: true,

  community: true,
  author: true,
  feedback: true,
};

export const skillForestSelect = {
  id: true,
  userId: true,
  createdAt: true,
  updatedAt: true,

  user: true,
  communities: true,
  followers: true,
};

export const experienceSelect = {
  id: true,
  amount: true,
  communityId: true,
  userId: true,
  createdAt: true,
  updatedAt: true,

  community: true,
  user: true,
  skillTreeNodes: true,
  leaderboards: true,
  events: true,
};

export const leaderboardSelect = {
  id: true,
  communityId: true,
  createdAt: true,
  updatedAt: true,

  community: true,
  users: true,
  experiences: true,
};

export const feedbackSelect = {
  id: true,
  userId: true,
  postId: true,
  feedbackText: true,
  createdAt: true,
  updatedAt: true,

  user: true,
  post: true,
};

export const eventSelect = {
  id: true,
  name: true,
  rankedStatus: true,
  experiencePayout: true,
  communityId: true,
  userId: true,
  experienceId: true,
  createdAt: true,
  updatedAt: true,

  community: true,
  user: true,
  experience: true,
};

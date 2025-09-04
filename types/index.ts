export type TSkillTrees = {
  skillTreeId: string;
  userId: string;
  role: string;
  verificationStatus: string;
  skillTree: TSkillTree;
};

export type TSkillTree = {
  id: string;
  name: string;
  description: string;
  creatorId: string;
  createdAt: string;
  updatedAt: string;
  creator: TCreator;
  tags: TTag[];
  skillNodes: TSkillNode[];
};

export type TCreator = {
  id: string;
  name: string;
  email: string;
};

export type TTag = {
  id: string;
  name: string;
  isRestricted: boolean;
  restrictionDescription: string;
  createdAt: string;
  updatedAt: string;
};

export type TEvents = {
  id: string;
  title: string;
  isRanked: boolean;
  xpPayout: number;
  startDate: string;
  endDate: string;
  winnerId: string;
  createdAt: string;
  updatedAt: string;
};

export type TUser = {
  id: string;
  name: string;
  email: string;
  dateOfBirth: string;
  pfp: string;
  xpPoint: number;
  createdAt: string;
  updatedAt: string;
};

export type TSkillNode = {
  id: string;
  name: string;
  description: string;
  xpPoint: number;
  skillTreeId: string;
};

export type TSkillTreeUser = {
  role: "ADMIN" | "MEMBER";
  verificationStatus: "PENDING" | "VERIFIED";
};

export type TAuthSkillTree = {
  id: string;
  name: string;
  description: string;
  creator: TCreator;
  tags: TTag[];
  skillNodes: TSkillNode[];
  skillTreeUser: TSkillTreeUser[];
  createdAt: string;
  updatedAt: string;
};

export type APIResponse<T> = {
  ok: boolean;
  message: T | string;
  status: number;
};

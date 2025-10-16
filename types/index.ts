export type TAuthSkillTrees = {
  skillTreeId: string;
  userId: string;
  role: string;
  verificationStatus: string;
  skillTree: TAuthSkillTree;
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
  skillTreeUser: TAuthSkillTreeUser[];
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

export type TAuthSkillTreeUser = {
  skillTreeId: string;
  skillTree: TAuthSkillTree;
  userId: string;
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
  skillTreeUser: TAuthSkillTreeUser[];
  createdAt: string;
  updatedAt: string;
  _count: {
    skillNodes: number;
    skillTreeUser: number;
  };
};

export type TGetCommunitiesByMembershipResponse = {
  skillTreeId: string;
  userId: string;
  role: string;
  verificationStatus: string;
  skillTree: TAuthSkillTree;
};

export type APIResponse<T> = {
  ok: boolean;
  message: T;
  status: number;
};

export type TPost = {
  id: string;
  content: string;
  proofMedia: string;
  skillNode: TSkillNode;
  skillNodeId: string;
  likes: TUser[];
  feedback: TFeedback[];
  createdAt: string;
  updatedAt: string;
};

export type TFeedback = {
  verifier: TUser;
  verifierId: string;
  post: TPost;
  postId: string;
  feedbackText: string;
  multiplier: number;
};

export type TSignInResponse = {
  access_token: string;
  user: TUser;
};

export type TSignUpResponse = {
  access_token: string;
  user: TUser;
};

export type TGetUserProfileResponse = TUser;

export type TGeTAuthSkillTreesResponse = TAuthSkillTree[];

// Consolidated types derived from the `actions` folder (actions are authoritative)

export type APIResponse<T> = {
  ok: boolean;
  message: T;
  status: number;
};

export type TCreator = {
  id: string;
  name: string;
  email: string;
};

// Basic skill node shape used in skilltree listings
export type TSkillNode = {
  id: string;
  name: string;
  description?: string;
  xpPoint?: number;
  skillTreeId?: string;
  parentNode?: TSkillNode | null;
  childNode?: TSkillNode[];
};

export type TAuthSkillTreeUser = {
  role: "ADMIN" | "MEMBER";
  verificationStatus: "VERIFIED" | "PENDING" | "PENDING";
  user?: {
    id: string;
    name: string;
    email?: string;
    xpPoint?: number;
  };
};

export type TAuthSkillTree = {
  id: string;
  name: string;
  description?: string;
  creatorId?: string;
  createdAt?: string;
  updatedAt?: string;
  creator?: TCreator;
  tags: string[];
  skillNodes: TSkillNode[];
  skillTreeUser?: TAuthSkillTreeUser[];
  isRestricted: boolean;
  _count?: {
    skillNodes?: number;
    skillTreeUser?: number;
  };
};

export type TAuthSkillTrees = {
  skillTreeId: string;
  userId: string;
  role: string;
  verificationStatus: string;
  skillTree: TAuthSkillTree;
};

export type TUser = {
  id: string;
  name: string;
  email?: string;
  dateOfBirth?: string;
  pfp?: string;
  xpPoint?: number;
  skillTreeUser?: TAuthSkillTreeUser[];
  createdAt?: string;
  updatedAt?: string;
};

// Post shape used by get-all-post-for-skilltree action (keeps the action-exported name TSkillNode in that file).
export type TPost = {
  id: string;
  content: string;
  proofMedia: string | null;
  createdAt: string;
  updatedAt: string;
  creator: {
    id: string;
    name: string;
    email?: string;
  };
  tags: string[];
  skillNode: {
    id: string;
    name: string;
    skillTree?: {
      id: string;
      name: string;
    };
  };
  likes: Array<{ id: string; name: string }>;
  feedback: Array<{
    verifierId: string;
    postId: string;
    feedbackText: string;
    multiplier: number;
    verifier: { id: string; name: string };
  }>;
  _count?: {
    likes?: number;
    feedback?: number;
  };
};

export type TFeedback = {
  verifier: TUser;
  verifierId: string;
  post: TPost;
  postId: string;
  feedbackText: string;
  multiplier: number;
};

export type TAuthSkillTreeMember = {
  skillTreeId: string;
  role: "ADMIN" | "MEMBER";
  verificationStatus: "PENDING" | "VERIFIED";
  user: {
    id: string;
    name: string;
    email: string;
    xpPoint: number;
  };
};

export type CreatePostPayload = {
  skillNodeId: string;
  content: string;
  proofMedia?: string | null;
};

export type TSignInResponse = {
  access_token: string;
  user: TUser;
};

export type TSignUpResponse = {
  access_token: string;
  user: TUser;
};

export type TEvent = {
  id: string;
  title: string;
  description: string;
  mode: "RANKED" | "UNRANKED" | "CASUAL";
  xpPayout: number;
  startDate: string;
  endDate: string;
  winnerId: string;
  createdAt: string;
  updatedAt: string;
};

export type TFollowerFollowingResponse = {
  followers: TPublicUser[];
  following: TPublicUser[];
};

export type TPublicUser = {
  id: string;
  name: string;
  dateOfBirth: Date;
  pfp: string;
  xpPoint: number;
  createdAt: Date;
  updatedAt: Date;
};

export type TGetUserProfileResponse = TUser;

export type TGeTAuthSkillTreesResponse = TAuthSkillTree[];

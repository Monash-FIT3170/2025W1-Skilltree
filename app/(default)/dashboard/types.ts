import { TAuthSkillTreeUser } from "@/types";

type TEventResponse = {
  ok: boolean;
  message: TEvents[];
  status: number;
};

type TAuthSkillTree = {
  id: string;
  name: string;
  description: string;
  creatorId: string;
  createdAt: string;
  updatedAt: string;
  creator: TCreator;
  tags: string[];
  skillNodes: TSkillNode[];
};

type TCreator = {
  id: string;
  name: string;
  email: string;
};

type TEvents = {
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

type TUser = {
  id: string;
  name: string;
  email: string;
  dateOfBirth: string;
  pfp: string;
  xpPoint: number;
  createdAt: string;
  updatedAt: string;
};

type TSkillNode = {
  id: string;
  name: string;
  description: string;
  xpPoint: number;
  skillTreeId: string;
};

export type APIResponse<T> = {
  ok: boolean;
  message: T | string;
  status: number;
};

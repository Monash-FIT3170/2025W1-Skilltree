import { TAuthSkillTree, TUser } from "@/types";

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

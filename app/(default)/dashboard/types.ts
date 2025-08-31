import { TEvents, TSkillTrees } from "@/types";

export type TSkillTreeResponse = {
  ok: boolean;
  message: TSkillTrees[];
  status: number;
};

export type TEventResponse = {
  ok: boolean;
  message: TEvents[];
  status: number;
};

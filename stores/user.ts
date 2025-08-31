import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { TUser } from "@/types";

type UserStateType = {
  accessToken?: string;
  userId?: string;
  user?: TUser;
};

export const userStore = createStore<UserStateType>()(
  persist(
    (set) => ({
      accessToken: undefined,
      userId: undefined,
      user: undefined,
      setAccessToken: (accessToken: string) => set({ accessToken }),
      setUserId: (userId: string) => set({ userId }),
      setUser: (user: TUser) => set({ user }),
    }),
    { name: "user-storage" }
  )
);

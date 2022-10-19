import { defineStore } from "pinia";
import { User } from "@/models/User";
import type { IUser } from "@/models/User";

interface IGlobalStoreState {
  users: User[];
}

export const useGlobalStore = defineStore({
  id: "globalStore",

  state: () =>
    ({
      users: {},
    } as IGlobalStoreState),

  getters: {
    getUser: (state) => (userId: number) => {
      state.users.find((user) => user.id === userId);
    },
  },

  actions: {
    createNewUser(userData: IUser) {
      const newUser = new User(userData);
      this.users.push(newUser);
      return newUser;
    },
  },
});

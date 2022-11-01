import { defineStore } from 'pinia';
import { Global } from '@/models/Global';
import type { IGlobal } from '@/models/Global';

interface IGlobalStoreState {
  globals: Global[];
}

export const useGlobalStore = defineStore({
  id: 'globalStore',

  state: () =>
    ({
      globals: []
    } as IGlobalStoreState),

  getters: {
    getGlobal: (state) => (globalId: number) => {
      return state.globals.find((global) => global.id === globalId);
    }
  },

  actions: {
    createNewGlobal(globalData: IGlobal) {
      const newGlobal = new Global(globalData);
      this.globals.push(newGlobal);
      return newGlobal;
    }
  }
});

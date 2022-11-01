import { setActivePinia, createPinia } from 'pinia';
import { describe, it, beforeEach, expect } from 'vitest';
import { useGlobalStore } from '@/store/global';

describe('Global store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('Should create a new Global instance and add it to state globals', () => {
    const globalStore = useGlobalStore();
    const newGlobal = globalStore.createNewGlobal({ id: 1 });
    expect(globalStore.globals.length).toEqual(1);
    expect(globalStore.globals[0]).toStrictEqual(newGlobal);
  });

  it('Should return the correct global item from its id', () => {
    const globalStore = useGlobalStore();
    const newGlobal1 = globalStore.createNewGlobal({ id: 4 });
    const newGlobal2 = globalStore.createNewGlobal({ id: 7 });
    expect(globalStore.globals.length).toEqual(2);
    expect(globalStore.getGlobal(4)).toStrictEqual(newGlobal1);
    expect(globalStore.getGlobal(7)).toStrictEqual(newGlobal2);
  });
});

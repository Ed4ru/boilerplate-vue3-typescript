import { describe, it, expect } from 'vitest';
import { Global } from '@/models/Global';

describe('Global class', () => {
  it('Should create a new instance of Global', () => {
    const global = new Global({ id: 1 });
    expect(global).toBeInstanceOf(Global);
    expect(global.id).toEqual(1);
  });

  it('Should update id of Global instance', () => {
    const global = new Global({ id: 1 });
    global.update({ id: 3, createdAt: '1991-01-02' });
    expect(global.id).toEqual(3);
    expect(global.createdAt).toBeInstanceOf(Date);
  });
});

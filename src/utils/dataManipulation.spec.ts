import { describe, it, expect } from 'vitest';
import { Global } from '@/models/Global';
import { typeConvertor } from '@/utils/dataManipulation';

describe('typeConvertor', () => {
  it('Should convert a date string to a new Date', () => {
    const date = typeConvertor(Date, '1991-01-02');
    expect(date).toBeInstanceOf(Date);
    expect(date?.getDate()).toEqual(2);
    expect(date?.getMonth()).toEqual(0);
    expect(date?.getFullYear()).toEqual(1991);
  });
  it('Should not convert an existing Date to a new Date', () => {
    const date = new Date('1991-01-02');
    const convertedDate = typeConvertor(Date, date);
    expect(convertedDate).toBe(date);
  });
  it('Should create a new Global instance', () => {
    const global = new Global({ id: 2 });
    expect(global).toBeInstanceOf(Global);
  });
  it('Should return the existing Global instance', () => {
    const global = new Global({ id: 2 });
    const convertedGlobal = typeConvertor(Global, global);
    expect(convertedGlobal).toBe(global);
  });
  it('Should return null', () => {
    const nullVariable = typeConvertor(Global, null);
    const nullVariable2 = typeConvertor(Global, undefined);
    expect(nullVariable).toBe(null);
    expect(nullVariable2).toBe(null);
  });
});

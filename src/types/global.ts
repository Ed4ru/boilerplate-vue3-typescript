/* eslint-disable @typescript-eslint/no-explicit-any */
export type ValueOf<T> = T[keyof T];
export type AnyObject<T> = T & Record<string, unknown>;
export type AnyClass<T> = { new (...args: any[]): T };

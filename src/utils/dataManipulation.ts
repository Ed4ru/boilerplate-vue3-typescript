import type { AnyClass } from '@/types/global';

export const typeConvertor = <T>(
  type: AnyClass<T>,
  value: unknown
): T | null => {
  if (value == null) return null;
  if (value instanceof type) return value;
  return new type(value);
};

import type { AnyClass } from "@/types/global";

export const typeConvertor = (type: AnyClass, value: any) => {
  if (value == null) return null;
  if (value instanceof type) return value;
  return new type(value);
};

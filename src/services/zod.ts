import { AnyZodObject } from 'zod';
import { AnyObject } from '@/types/global';

export const validate = <T>(schema: AnyZodObject, data: AnyObject<T>) => {
  schema.parse(data);
};

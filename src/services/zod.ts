import { AnyZodObject, ZodError } from 'zod';
import { AnyObject } from '@/types/global';
import { set } from 'lodash';

export const validate = <T>(schema: AnyZodObject, data: AnyObject<T>) => {
  try {
    schema.parse(data);
    return true;
  } catch (error) {
    const validationError = error as ZodError;
    const issues: Record<string, unknown> = {};
    validationError.issues.forEach((issue) => {
      const path = issue.path.join('.');
      set(issues, path, issue.message);
    });
    return issues;
  }
};

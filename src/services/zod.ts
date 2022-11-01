import { reactive } from 'vue';
import { AnyZodObject, ZodError } from 'zod';
import { AnyObject } from '@/types/global';
import { set } from 'lodash';
import { i18n } from '@/services/i18n';

const { t } = i18n.global;

export const validationErrors: Record<
  string,
  Record<string, unknown>
> = reactive({});

export const validate = <T>(
  name: string,
  schema: AnyZodObject,
  data: AnyObject<T>
) => {
  try {
    schema.parse(data);
    return true;
  } catch (error) {
    const validationError = error as ZodError;
    validationError.issues.forEach((issue) => {
      const path = issue.path.join('.');
      set(
        validationErrors,
        `${name}.${path}`,
        t(`VALIDATION.${issue.message}`, { field: path })
      );
    });
    return false;
  }
};

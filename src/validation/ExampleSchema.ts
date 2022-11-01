import { object, string, number } from 'zod';
import { isRequired } from '@/utils/validationErrors';

export const ExampleSchema = object({
  id: number(isRequired()),
  firstname: string(isRequired()),
  lastname: string(isRequired()),
  email: string(isRequired()).email('INVALID_EMAIL_FORMAT')
});

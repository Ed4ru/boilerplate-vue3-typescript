import { object, string, number } from 'zod';

export const createUserSchema = object({
  id: number(),
  firstname: string(),
  lastname: string(),
  email: string()
});

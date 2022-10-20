import { object, string, number } from 'zod';

const isReq = (fieldName: string) => {
  return {
    required_error: `${fieldName} is required.`
  };
};

export const createUserSchema = object({
  id: number(isReq('id')),
  firstname: string(isReq('firstname')),
  lastname: string(isReq('lastname')),
  email: string(isReq('email')).email('invalid email')
});

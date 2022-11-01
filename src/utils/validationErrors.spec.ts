import { describe, it, expect } from 'vitest';
import { isRequired } from '@/utils/validationErrors';

describe('isRequired', () => {
  it('Should return a required error', () => {
    const error = isRequired();
    expect(error.required_error).toBe('IS_REQUIRED');
  });
});

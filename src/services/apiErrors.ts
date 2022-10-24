import { reactive } from 'vue';
import { AxiosError } from 'axios';
import { set } from 'lodash';

export const apiErrors: Record<string, Record<string, unknown>> = reactive({});

type ApiError = {
  field?: string;
  code: string;
};

const setApiErrors = (name: string, errors: ApiError[]) => {
  errors.forEach((error) => {
    const field =
      !error.field || error.field === 'base' ? 'global' : error.field;
    set(apiErrors, field, error.code);
  });
};

export const handleApiError = (
  name: string,
  apiError: AxiosError<Record<string, ApiError[]>>
) => {
  switch (apiError.request.code) {
    case 0:
      console.log('Network Error');
      break;
    case 403:
    case 404:
    case 500:
      console.log(`${apiError.request.code} Error`);
      break;
    case 400:
      if (apiError.response?.data?.errors) {
        setApiErrors(name, apiError.response.data.errors);
      } else {
        console.log('Undefined error');
      }
      break;
  }
};

import { set } from 'lodash';
import { reactive } from 'vue';
import { AxiosError } from 'axios';

export const apiErrors: Record<string, Record<string, unknown>> = reactive({});

type ApiError = {
  field?: string;
  message: string;
};

const setApiErrors = (name: string, errors: ApiError[]) => {
  errors.forEach((error) => {
    const field =
      !error.field || error.field === 'base' ? 'global' : error.field;
    set(apiErrors, `${name}.${field}`, error.message);
  });
};

export const handleApiError = (
  name: string,
  apiError: AxiosError<Record<string, ApiError[]>>
) => {
  switch (apiError.request.code) {
    case 0:
      console.error('Network Error');
      break;
    case 403:
    case 404:
    case 500:
      console.error(`${apiError.request.code} Error`);
      break;
    case 400:
      if (apiError.response?.data?.errors) {
        setApiErrors(name, apiError.response.data.errors);
      } else {
        console.error('Undefined error');
      }
      break;
  }
};

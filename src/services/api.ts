import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURI: string = import.meta.env.VITE_API_URI;

const apiClient: AxiosInstance = axios.create({
  baseURL: baseURI,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    dataType: 'json'
  }
});

export const apiWrapper = {
  instance: apiClient,
  responseBody: (response: AxiosResponse) => response.data,

  get: async function (url: string, params = {}) {
    try {
      const response: AxiosResponse = await this.instance.get(url, { params });
      return this.responseBody(response);
    } catch (error) {
      if (axios.isAxiosError(error)) throw error;
      throw new Error('Axios GET error : error type is not AxiosError');
    }
  },

  post: async function (url: string, data = {}, config?: AxiosRequestConfig) {
    try {
      const response: AxiosResponse = await this.instance.post(
        url,
        data,
        config
      );
      return this.responseBody(response);
    } catch (error) {
      if (axios.isAxiosError(error)) throw error;
      throw new Error('Axios POST error : error type is not AxiosError');
    }
  },

  patch: async function (url: string, data = {}, config?: AxiosRequestConfig) {
    try {
      const response: AxiosResponse = await this.instance.patch(
        url,
        data,
        config
      );
      return this.responseBody(response);
    } catch (error) {
      if (axios.isAxiosError(error)) throw error;
      throw new Error('Axios PATCH error : error type is not AxiosError');
    }
  },

  delete: async function (url: string, params = {}) {
    try {
      const response: AxiosResponse = await this.instance.delete(url, {
        params
      });
      return this.responseBody(response);
    } catch (error) {
      if (axios.isAxiosError(error)) throw error;
      throw new Error('Axios DELETE error : error type is not AxiosError');
    }
  }
};

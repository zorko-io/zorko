import axios from 'axios'

export * from './specs'
export * from './auth'

export const setBaseUrl = (baseUrl) => {
  axios.defaults.baseURL =  baseUrl;
};

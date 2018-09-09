import axios from 'axios'

export * from './specs'
export * from './auth'

export const setBaseUrl = (baseUrl) => {
  axios.defaults.baseURL =  baseUrl;
};

export const readStorageItem = (key) => {
  const item  = localStorage.getItem(key);
  return JSON.parse(item);
}

export const writeStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const removeStorageItem  =  (key) => {
  localStorage.removeItem(key);
}

export const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
export {fetchUserProfile} from "./userProfile";

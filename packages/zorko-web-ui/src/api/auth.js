import axios from 'axios/index'

export const fetchAuthAccount = async () => {
  const response = await axios.get('/auth/profile', { withCredentials: true })
  return response.data
}


let baseUrl;
if (typeof process.env.REACT_APP_ZORKO_SERVER_BASE_URL !== 'undefined') {
  baseUrl = process.env.REACT_APP_ZORKO_SERVER_BASE_URL
}


export const singInWithThridPatry = async () => {
  window.location.href = `${baseUrl}\\auth\\github\\sign-in`;
}

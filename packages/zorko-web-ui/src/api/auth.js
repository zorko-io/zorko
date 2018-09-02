import axios from 'axios/index'

export const fetchAuthAccount = async () => {
  const response = await axios.get('/auth/profile', { withCredentials: true })
  return response.data
}

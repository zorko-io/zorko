import axios from "axios";

export const fetchUserProfile = async () => {
  const response = await axios.get('/auth/profile', {withCredentials: true})
  return response.data
}

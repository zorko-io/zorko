import axios from 'axios/index'
import { API_DEFAULT_PAGGINATION_OPTIONS } from '../constants'

export const fetchSpecLookups = async (options = API_DEFAULT_PAGGINATION_OPTIONS) => {
  const response = await axios.get('/specs', { params: options })
  return response.data
}

export const fetchSpec = async (options) => {
  const response = await axios.get(`/specs/${options.id}`);
  return response.data;
}

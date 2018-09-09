import { combineReducers } from 'redux'
import previews from './previews'
import specs from './specs'
import error from './error'
import auth from "./auth";
import userProfile from './userProfile'

const rootReducer = combineReducers({
  auth,
  specs,
  previews,
  error,
  userProfile
});

export default rootReducer

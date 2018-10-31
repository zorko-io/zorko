import { combineReducers } from 'redux'
import previews from './previews'
import specs from './specs'
import error from './error'
import auth from "./auth";
import userProfile from './userProfile'
import viewer from './viewer'
import {newSpecWizardReducer} from './newSpecWizard'

const rootReducer = combineReducers({
  auth,
  specs,
  previews,
  error,
  userProfile,
  viewer,
  newSpecWizard: newSpecWizardReducer
});

export default rootReducer

import { combineReducers } from 'redux'
import previews from './previews'
import specs from './specs'
import error from './error'
import { routerReducer } from 'react-router-redux'
import auth from "./auth";

const rootReducer = combineReducers({
  auth,
  specs,
  previews,
  error,
  router: routerReducer
})

export default rootReducer

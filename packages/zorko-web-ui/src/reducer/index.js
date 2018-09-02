import { combineReducers } from 'redux'
import previews from './previews'
import specs from './specs'
import error from './error'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  specs,
  previews,
  error,
  router: routerReducer
})

export default rootReducer

import { createStore, compose, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { DEFAULT_APP_STATE } from '../state'
import rootReducer from '../reducer'
import rootSaga from '../sagas'

let composeEnhancers = compose
const reduxDevToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

if (process.env.NODE_ENV === 'development' && reduxDevToolsEnhancer) {
  composeEnhancers = reduxDevToolsEnhancer
}

const sagaMiddleware = createSagaMiddleware()
const reduxLogger = createLogger()
const middleware = [reduxLogger, sagaMiddleware]

export default function createAppStore() {
  const enhancer = composeEnhancers(applyMiddleware(...middleware))

  let initialState = { ...DEFAULT_APP_STATE }
  const store = createStore(rootReducer, initialState, enhancer)

  sagaMiddleware.run(rootSaga)

  return store
}

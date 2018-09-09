import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import createApp from './App'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import createAppStore from './store'
import createHistory from 'history/createHashHistory'
import {bootstrapStart} from "./action/bootstrap";

const history = createHistory();
const store = createAppStore(history);
const App = createApp(history);

store.dispatch(bootstrapStart({
  baseUrl: process.env.REACT_APP_ZORKO_SERVER_BASE_URL
}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

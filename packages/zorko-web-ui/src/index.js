import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import createApp from './App'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import createAppStore from './store'
import createHistory from 'history/createHashHistory'

const history = createHistory()
const store = createAppStore(history)
const App = createApp(history)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import createAppStore from './store'
import {bootstrapStart} from "./action/bootstrap";
import App from "./App";
import {HashRouter} from "react-router-dom";
import Modal from 'react-modal'

const store = createAppStore();

store.dispatch(bootstrapStart({
  baseUrl: process.env.REACT_APP_ZORKO_SERVER_BASE_URL
}));

const APP_ELEMENT_ID = 'root';

Modal.setAppElement(`#${APP_ELEMENT_ID}`)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById(APP_ELEMENT_ID)
)
registerServiceWorker()

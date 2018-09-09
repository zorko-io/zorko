import React, { Component, Fragment } from 'react'
import './index.css'
import NavigationBar from './containers/navigation/NavigationBar'
import { Switch, Route } from 'react-router-dom'
import HomePage from './containers/home/HomePage'
import PreviewPage from './containers/preview/PreviewPage'

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar />
        <main>
            <Switch>
              <Route exact={true} path={'/'} component={HomePage} />
              <Route exact={true} path={'/specs'} component={PreviewPage} />
              <Route exact={true} path={'/specs/:specId'} component={PreviewPage} />
            </Switch>
        </main>
      </Fragment>
    )
  }
}

export default  App;

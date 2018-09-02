import React, { Component, Fragment } from 'react'
import './index.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavigationBar from './components/navigation/NavigationBar'
import { Switch, Route } from 'react-router-dom'
import HomePage from './containers/home/HomePage'
import { ConnectedRouter } from 'react-router-redux'
import PreviewPage from './containers/preview/PreviewPage'
import { fetchAuthAccount } from './api'

class App extends Component {
  componentDidMount() {
    fetchAuthAccount()
  }

  render() {
    return (
      <Fragment>
        <NavigationBar />
        <main>
          <ConnectedRouter history={this.props.history}>
            <Switch>
              <Route exact={true} path={'/'} component={HomePage} />
              <Route exact={true} path={'/specs'} component={PreviewPage} />
              <Route exact={true} path={'/specs/:specId'} component={PreviewPage} />
            </Switch>
          </ConnectedRouter>
        </main>
      </Fragment>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
}

export { App }

export default function createApp(history) {
  const mapStateToProps = () => ({
    history: history
  })

  return connect(
    mapStateToProps,
    null
  )(App)
}

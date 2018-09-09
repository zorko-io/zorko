import React, { Component, Fragment } from 'react'
import './index.css'
import NavigationBar from './containers/navigation/NavigationBar'
import { Switch, Route } from 'react-router-dom'
import GalleryPage from './containers/gallery/GalleryPage'

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar />
        <main>
            <Switch>
              <Route exact={true} path={'/'} component={GalleryPage} />
              <Route exact={true} path={'/gallery/:pageId'} component={GalleryPage} />
            </Switch>
        </main>
      </Fragment>
    )
  }
}

export default  App;

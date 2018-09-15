import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import GalleryPage from './containers/gallery/GalleryPage'
import Redirect from 'react-router/es/Redirect'
import ViewerPage from './containers/viewer/ViewerPage'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path={'/'} component={GalleryPage}/>
        <Route exact={true} path={'/gallery/0'} render={() => <Redirect to={'/'}/>}/>
        <Route path={'/gallery/:pageId'} component={GalleryPage}/>
        <Route path={'/specs/:specId'} component={ViewerPage} />
      </Switch>
    )
  }
}

export default App

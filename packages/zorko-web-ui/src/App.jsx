import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import GalleryPage from './containers/gallery/GalleryPage'
import Redirect from 'react-router/es/Redirect'
import ViewerPage from './containers/viewer/ViewerPage'
import NewSpecPage from './containers/new-spec-wizard/NewSpecPage'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact={true} path={'/'} component={GalleryPage}/>
          <Route exact={true} path={'/gallery/0'} render={() => <Redirect to={'/'}/>}/>
          <Route path={'/gallery/:pageId'} component={GalleryPage}/>
          <Route path={'/wizard/new-spec'} component={NewSpecPage} />
          <Route path={'/specs/:specId'} component={ViewerPage} />
        </Switch>
      </Fragment>
    )
  }
}

export default App

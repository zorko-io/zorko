import React, { Component, Fragment } from 'react'
import './index.css'
import NavigationBar from './containers/navigation/NavigationBar'
import { Switch, Route } from 'react-router-dom'
import GalleryPage from './containers/gallery/GalleryPage'
import Redirect from 'react-router/es/Redirect'
import IntroSection from './containers/intro/IntroSection'
import Footer from './containers/footer/Footer'

class App extends Component {
  render() {
    return (
      <Fragment>
          <NavigationBar/>
          <IntroSection/>
          <main className={'app-main'}>
            <div className={'container'}>
              <Switch>
                <Route exact={true} path={'/'} component={GalleryPage}/>
                <Route exact={true} path={'/gallery/0'} render={() => <Redirect to={'/'}/>}/>
                <Route path={'/gallery/:pageId'} component={GalleryPage}/>
              </Switch>
            </div>
          </main>
          <Footer/>
      </Fragment>
    )
  }
}

export default App

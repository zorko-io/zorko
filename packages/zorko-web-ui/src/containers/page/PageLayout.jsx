import React, { Component, Fragment } from 'react'
import NavigationBar from './navigation/NavigationBar'
import Footer from './footer/Footer'

class PageLayout extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar/>
        {this.props.children}
        <Footer/>
      </Fragment>
    )
  }
}

export default PageLayout;

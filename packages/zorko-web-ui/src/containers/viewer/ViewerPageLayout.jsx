import React, { Component } from 'react'
import NavigationBar from '../page/navigation/NavigationBar'
import Footer from '../page/footer/Footer'

class ViewerPageLayout extends Component {
  render() {
    return (
      <div className={'viewer-page-wrap'}>
        <NavigationBar/>
        <div className={'viewer-content'}>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default ViewerPageLayout

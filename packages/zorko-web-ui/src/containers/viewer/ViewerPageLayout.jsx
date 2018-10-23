import React, { Component } from 'react'
import NavigationBar from '../page/navigation/NavigationBar'
import Footer from '../page/footer/Footer'
import PropTypes from 'prop-types'

class ViewerPageLayout extends Component {
  render() {
    return (
      <div className={'viewer-page-wrap'}>
        <NavigationBar
          author={this.props.author}
          stretch={true}
          title={this.props.title}
        />
        <div className={'viewer-content'}>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

ViewerPageLayout.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
}

export default ViewerPageLayout

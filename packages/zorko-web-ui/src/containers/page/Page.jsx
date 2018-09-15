import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { isAuthenticated } from '../../selector/auth'
import { connect } from 'react-redux'
import NavigationBar from './navigation/NavigationBar'
import IntroSection from './intro/IntroSection'
import Footer from './footer/Footer'

class Page extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar/>
        <IntroSection/>
        <main className={'app-main'}>
          <div className={'container'}>
            {this.props.children}
          </div>
        </main>
        <Footer/>
      </Fragment>
    )
  }
}

Page.propTypes = {
  shouldShowIntroSection: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => ({
  shouldShowIntroSection: !isAuthenticated(state),
  ...ownProps
})

export default connect(mapStateToProps)(Page);

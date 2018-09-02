import React, { Component, Fragment } from 'react'
import PreviewGrid from '../preview/PreviewGrid'
import connect from 'react-redux/es/connect/connect'
import PropTypes from 'prop-types'
import { specsPageRequest } from '../../action/home'
import { bindActionCreators } from 'redux'
import HomeIntroSection from './HomeIntroSection'

class HomePage extends Component {
  static getDerivedStateFromProps(props, state) {
    props.pageInit()
    return state
  }

  render() {
    return (
      <Fragment>
        <HomeIntroSection />
        <PreviewGrid />
      </Fragment>
    )
  }
}

HomePage.propTypes = {
  pageInit: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      pageInit: specsPageRequest
    },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(HomePage)

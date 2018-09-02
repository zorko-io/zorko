import React, { Component, Fragment } from 'react'
import PreviewGrid from './PreviewGrid'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { specsPageRequest } from '../../action/home'
import connect from 'react-redux/es/connect/connect'
import { getRouterMatchParam } from '../../util/router-match'

class PreviewPage extends Component {
  static getDerivedStateFromProps(props, state) {
    props.pageInit(getRouterMatchParam('specId', props))
    return state
  }

  render() {
    return (
      <Fragment>
        <PreviewGrid />
      </Fragment>
    )
  }
}

PreviewPage.propTypes = {
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
)(PreviewPage)

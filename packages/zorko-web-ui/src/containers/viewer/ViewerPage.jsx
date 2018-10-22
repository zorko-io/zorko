import React, { Component } from 'react'
import ViewerPageLayout from './ViewerPageLayout'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { specRequest } from '../../action'
import { connect } from 'react-redux'
import Vega from 'react-vega'

class ViewerPage extends Component {

  componentDidMount() {
    let specId = this.props.match.params.specId
    if (specId) {
      this.props.requestSpec(specId)
    }
  }

  get title () {
    let spec = this.props.spec
    if (spec && spec.description) {
      return spec.description;
    }
    return 'Untitled';
  }

  render() {
    const { spec } = this.props

    return (
      <ViewerPageLayout title={this.title}>
        <div className="viewer-chart">
          <div className="viewer-chart-wrap">
            {spec && <Vega spec={spec}/>}
          </div>
        </div>
      </ViewerPageLayout>
    )
  }
}

ViewerPage.propTypes = {
  requestSpec: PropTypes.func,
  spec: PropTypes.object
}

const mapStateToProps = (state) => ({
  spec: state.specs.byId[state.viewer.selectedSpecId]
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      requestSpec: specRequest
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(ViewerPage)

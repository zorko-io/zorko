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

  get spec () {
    return this.props.spec ? this.props.spec.spec : this.props.spec;
  }

  get title () {
    if (this.spec && this.spec.description) {
      return this.spec.description;
    }
    return 'Untitled';
  }

  get author () {
    if (this.spec){
      return this.props.spec.createdBy.login;
    }
    return '';
  }

  render() {
    return (
      <ViewerPageLayout
        title={this.title}
        author={this.author}
      >
        <div className="viewer-chart">
          <div className="viewer-chart-wrap">
            {this.spec && <Vega spec={this.spec}/>}
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

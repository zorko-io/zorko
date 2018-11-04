import React, { Component, Fragment } from 'react'
import ViewerPageLayout from '../viewer/ViewerPageLayout'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Vega from 'react-vega'
import { bindActionCreators } from 'redux'
import { newSpecWizardClear } from '../../action'
import { NewSpecWizardButton } from './NewSpecWizardButton'

class NewSpecPage extends Component {

  get title() {
    let spec = this.props.spec
    if (spec && spec.description) {
      return spec.description
    }
    return 'Untitled'
  }

  componentWillUnmount() {
    if (this.props.clearSpec) {
      this.props.clearSpec()
    }
  }

  render() {
    return (
      <ViewerPageLayout
        title={this.title}
      >
        <div className="viewer-chart">
          {this.props.isEmptySpec ? (
            <Fragment>
              <span>Nothing to display. Please use</span>
              <NewSpecWizardButton/>
              <span>  to upload new spec content</span>
            </Fragment>
          ) : (<div className="viewer-chart-wrap">
            <Vega spec={this.props.spec}/>
          </div>)}
        </div>
      </ViewerPageLayout>
    )
  }
}

NewSpecPage.propTypes = {
  spec: PropTypes.object.isRequired,
  isEmptySpec: PropTypes.bool,
  clearSpec: PropTypes.func
}

const mapStateToProps = (state) => ({
  spec: state.newSpecWizard.spec,
  isEmptySpec: state.newSpecWizard.isEmptySpec
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      clearSpec: newSpecWizardClear
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(NewSpecPage)

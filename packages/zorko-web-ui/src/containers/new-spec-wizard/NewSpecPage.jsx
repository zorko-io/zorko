import React, { Component, Fragment } from 'react'
import ViewerPageLayout from '../viewer/ViewerPageLayout'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Vega from 'react-vega'
import VegaLite from 'react-vega-lite'
import { bindActionCreators } from 'redux'
import { newSpecWizardClear, newSpecWizardError } from '../../action'
import { NewSpecWizardButton } from './NewSpecWizardButton'
import { SpecParseErrorBoundary } from './SpecParseErrorBoundary'

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

  handleParseError = (error) => {
    if (this.props.clearSpec) {
      this.props.catchError(error)
    }
  }

  renderSpec = () => (
    <SpecParseErrorBoundary
      hasError={this.props.hasError}
      isVegaLite={this.props.isVegaLite}
      onParseError={this.handleParseError}
    >
      {this.props.isVegaLite ?
        (<VegaLite spec={this.props.spec}/>) :
        (<Vega spec={this.props.spec}/>)
      }
    </SpecParseErrorBoundary>
  )

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
            {this.renderSpec()}
          </div>)}
        </div>
      </ViewerPageLayout>
    )
  }
}

NewSpecPage.propTypes = {
  spec: PropTypes.object.isRequired,
  isEmptySpec: PropTypes.bool,
  clearSpec: PropTypes.func,
  catchError: PropTypes.func,
  hasError: PropTypes.bool
}

const mapStateToProps = (state) => ({
  spec: state.newSpecWizard.spec,
  isEmptySpec: state.newSpecWizard.isEmptySpec,
  isVegaLite: state.newSpecWizard.isVegaLite,
  hasError: state.newSpecWizard.hasError
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      clearSpec: newSpecWizardClear,
      catchError: newSpecWizardError
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(NewSpecPage)

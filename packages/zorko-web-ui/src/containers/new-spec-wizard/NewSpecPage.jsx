import React, { Component, Fragment } from 'react'
import ViewerPageLayout from '../viewer/ViewerPageLayout'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Vega from 'react-vega'
import { VegaSpecValidator } from './VegaSpecValidator'
import { bindActionCreators } from 'redux'
import { newSpecWizardClear } from '../../action'

class NewSpecPage extends Component {

  get title () {
    let spec = this.props.spec
    if (spec && spec.description) {
      return spec.description;
    }
    return 'Untitled';
  }

  get author () {
    // TODO: replace with current user
    return '';
  }

  componentWillUnmount () {
    if (this.props.clearSpec){
      this.props.clearSpec()
    }
  }

  render() {
    return (
      <ViewerPageLayout
        title={this.title}
        author={this.author}
      >
        <div className="viewer-chart">
          {!this.props.spec && <span>Empty Spec</span>}
          <VegaSpecValidator spec={this.props.spec}>
            {(error, spec)=>(
              <Fragment>
              {error ?
                (<Fragment>
                  <div>{error.message}</div>
                  <div>{error.stack}</div>
                </Fragment>): (
                <div className="viewer-chart-wrap">
                  {<Vega spec={spec}/>}
              </div>)}
            </Fragment>
            )}
          </VegaSpecValidator>
        </div>
      </ViewerPageLayout>
    )
  }
}

NewSpecPage.propTypes = {
  spec: PropTypes.object.isRequired,
  clearSpec :PropTypes.func
}

const mapStateToProps = (state) => ({
  spec: state.newSpecWizard.spec
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      clearSpec: newSpecWizardClear
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(NewSpecPage)

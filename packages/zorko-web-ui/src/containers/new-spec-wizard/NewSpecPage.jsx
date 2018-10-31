import React, { Component } from 'react'
import ViewerPageLayout from '../viewer/ViewerPageLayout'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Vega from 'react-vega'

class NewSpecPage extends Component {

  get spec () {
    return this.props.spec ? this.props.spec.spec : this.props.spec;
  }

  get title () {
    if (this.spec && this.spec.description) {
      return this.spec.description;
    }
    return 'Untitled';
  }

  // TODO: replace with current user
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

NewSpecPage.propTypes = {
  spec: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  spec: state.newSpecWizard.spec
})

export default connect(mapStateToProps)(NewSpecPage)

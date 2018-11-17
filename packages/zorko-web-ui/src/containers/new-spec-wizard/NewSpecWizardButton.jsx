import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import { newSpecWizardFileSet, newSpecWizardPublishRequest } from '../../action'
import { UploadSpecModal } from './UploadSpecModal'
import { Redirect, Route } from 'react-router'

class NewSpecWizardButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isUploadFileModalOpen: false,
      file: null,
      hasFileError: false,
      error: null
    }
  }

  openModal = () => this.setState({
    ...this.state,
    isUploadFileModalOpen: true
  })

  closeModal = () => this.setState({
    ...this.state,
    isUploadFileModalOpen: false
  })

  publishSpec = () => {
    if (this.props.publishSpec) {
      this.props.publishSpec({
        spec: this.props.spec,
        title: 'Untitled',
        type: this.props.type
      });
    }
  }

  handleClose = () => this.closeModal()

  setError = (error) => this.setState({
    hasFileError: true,
    error
  })

  handleFileFailedUpload = (error) => {
    this.setError(error)
  }

  cleanError = () => this.setState({...this.state, error: null, hasFileError: false})

  handleFileSuccessUpload = (file,type, history) => {
    this.cleanError()
    if (this.props.onFileUploadSuccess) {
        this.props.onFileUploadSuccess({
          type,
          spec: file.content
        })
        this.closeModal()
        history.push('/wizard/new-spec')
    }
  }

  shouldAllowPublish = (currentUrl) => {
     return currentUrl === '/wizard/new-spec' && !this.props.hasError
  }

    render() {
      return (<Route children={({ history, match }) => (
          <Fragment>
          {!this.shouldAllowPublish(match.url) ? (<a className="button" onClick={this.openModal}>
            + New
          </a>) : (<a className="button" onClick={this.publishSpec}>
            Publish
          </a>)}
          <UploadSpecModal
            isOpen={this.state.isUploadFileModalOpen}
            onSpecUploadSuccess={(file, type) => this.handleFileSuccessUpload(file, type, history)}
            onSpecUploadFailed={(error)=> this.handleFileFailedUpload(error)}
            onClose={this.handleClose}
          />
            {this.props.publishedSpecId && <Redirect push to={`/specs/${this.props.publishedSpecId}`} />}
        </Fragment>
      )} />)
    }
}

NewSpecWizardButton.propTypes = {
  onFileUploadSuccess: PropTypes.func,
  publishSpec: PropTypes.func,
  spec: PropTypes.object,
  type: PropTypes.string
}

const mapStateToProps = (state) => ({
  spec: state.newSpecWizard.spec,
  hasError: state.newSpecWizard.hasError,
  type: state.newSpecWizard.type,
  publishedSpecId: state.newSpecWizard.publishedSpecId
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onFileUploadSuccess: newSpecWizardFileSet,
      publishSpec: newSpecWizardPublishRequest
    },
    dispatch
  )

NewSpecWizardButton = connect(mapStateToProps, mapDispatchToProps)(NewSpecWizardButton)

export { NewSpecWizardButton }

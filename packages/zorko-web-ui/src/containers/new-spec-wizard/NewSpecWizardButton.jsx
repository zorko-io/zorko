import React, { Component, Fragment } from 'react'
import Modal from 'react-modal'
import { UploadFile } from './UploadFile'
import PropTypes from 'prop-types'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import { newSpecWizardFileSet } from '../../action'
import { Route } from 'react-router'

class NewSpecWizardButton extends Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false,
      file: null,
      hasFileError: false,
      error: null
    }
  }

  openModal = () => this.setState({
    ...this.state,
    modalIsOpen: true
  })

  closeModal = () => this.setState({
    ...this.state,
    modalIsOpen: false
  })

  publishSpec = () => console.log('Publish Spec')

  handleClose = () => this.closeModal()

  handleFileFailedUpload = (error) => {
    this.setState({
      hasFileError: true,
      error
    })
  }

  cleanError = () => this.setState({...this.state, error: null, hasFileError: false})

  handleFileSuccessUpload = (file, history) => {
    this.cleanError()
    this.closeModal()
    if (this.props.onFileUploadSuccess) {
      this.props.onFileUploadSuccess(file.content)
    }
    history.push('/wizard/new-spec')
  }

  shouldAllowPublish = (currentUrl) => {
     return currentUrl === '/wizard/new-spec'
  }

  render = () =>
    (<Route children={({ history, match }) => (
      <Fragment>
        {!this.shouldAllowPublish(match.url) ? ( <a className="button" onClick={this.openModal}>
          + New
        </a>) : (<a className="button" onClick={this.publishSpec}>
          Publish
        </a>)}

        <Modal
          className="zr-modal modal"
          overlayClassName="zr-modal modal-background zr-modal-background-level"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          contentLabel="Example Modal"
        >
          <div className={'modal-card'}>
            <header className="modal-card-head">
              <p className="modal-card-title">Upload Spec by</p>
              <button className="delete" aria-label="close" onClick={this.handleClose}/>
            </header>
            <section className="modal-card-body">
              <div className="new-spec-wizard-controls">
                <UploadFile
                  onFileLoaded={(file) => this.handleFileSuccessUpload(file, history)}
                  onFileError={this.handleFileFailedUpload}
                >
                  {(triggerUpload) => (
                    <Fragment>
                      <button
                        onClick={triggerUpload}
                        className="button is-success">Vega-Lite File</button>
                      {this.state.hasFileError && this.renderFileErrorNotification(this.state.error)}
                    </Fragment>
                  )}
                </UploadFile>

                <div className="choose-message">
                  <span>or</span>
                </div>
                <button className="button is-success">URL</button>
              </div>
            </section>
          </div>
        </Modal>
    </Fragment>)}
    />)

  renderFileErrorNotification = (error) => (
    <div style={{color: 'red'}}>
      <div>{error.message}</div>
    </div>
  )

}

NewSpecWizardButton.propTypes = {
  onFileUploadSuccess: PropTypes.func,
  spec: PropTypes.object,
}

const mapStateToProps = (state) => ({
  spec: state.newSpecWizard.spec
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onFileUploadSuccess: newSpecWizardFileSet
    },
    dispatch
  )

NewSpecWizardButton = connect(mapStateToProps, mapDispatchToProps)(NewSpecWizardButton)

export { NewSpecWizardButton }

import React, { Component, Fragment } from 'react'
import Modal from 'react-modal'
import { UploadFile } from './UploadFile'
import { UploadFileSuccess } from './UploadFileSuccess'
import PropTypes from 'prop-types'
import { UploadFileError } from './UploadFileError'
import { Redirect } from 'react-router'
import connect from 'react-redux/es/connect/connect'
import { bindActionCreators } from 'redux'
import { newSpecWizardFileSet } from '../../action'

export class NewSpecWizardButton extends Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false,
    }
  }

  openModal = () => this.setState({ modalIsOpen: true })

  closeModal = () => this.setState({ modalIsOpen: false })

  handleClose = () => this.closeModal()

  handleFileSuccessUpload = (file) => {
    this.closeModal();
    if (this.props.onFileUploadSuccess) {
      this.props.onFileUploadSuccess(file.content)
    }
  }

  render() {
    return (
      <Fragment>
        <a className="button" onClick={this.openModal}>
          + New
        </a>
        <Modal
          className="zr-modal modal"
          overlayClassName="zr-modal modal-background zr-modal-background-level"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          contentLabel="Example Modal"
        >
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Upload Spec by</p>
              <button className="delete" aria-label="close" onClick={this.handleClose}/>
            </header>
            <section className="modal-card-body">
              <div className="new-spec-wizard-controls">
                <UploadFile onFileReady={this.handleFileSuccessUpload}>
                  {(triggerUpload) => (
                    <Fragment>
                      <button
                        onClick={triggerUpload}
                        className="button is-success">File</button>
                      <UploadFileSuccess>
                        <Redirect to={'/wizard/new-spec'} />
                      </UploadFileSuccess>
                      <UploadFileError>
                        {(error) => <div style={{color:'red'}}>Error: {error.message}</div>}
                      </UploadFileError>
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
      </Fragment>
    )
  }
}

NewSpecWizardButton.propTypes = {
  onFileUploadSuccess: PropTypes.func
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onFileUploadSuccess: newSpecWizardFileSet
    },
    dispatch
  )


export default connect(null, mapDispatchToProps)(NewSpecWizardButton)

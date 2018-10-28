import React, { Component, Fragment } from 'react'
import Modal from 'react-modal'
import { UploadFile } from './UploadFile'
import { UploadFileSuccess } from './UploadFileSuccess'
import PropTypes from 'prop-types'


export class NewSpecWizardButton extends Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false,
      file: null
    }
  }

  openModal = () => this.setState({ modalIsOpen: true })

  closeModal = () => this.setState({ modalIsOpen: false })

  handleClose = () => this.closeModal()

  handleFileSuccessUpload = (file) => this.props.onFileUploadSuccess && this.props.onFileUploadSuccess(file)

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
              <button className="delete" aria-label="close" onClick={this.handleClose}></button>
            </header>
            <section className="modal-card-body">
              <div className="new-spec-wizard-controls">
                <UploadFile>
                  {(triggerUpload)=>(
                    <Fragment>
                      <button
                        onClick={triggerUpload}
                        className="button is-success">File</button>
                      <UploadFileSuccess onFileReady={this.handleFileSuccessUpload}>
                        {(file)=> <div>{file.content}</div>}
                      </UploadFileSuccess>

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


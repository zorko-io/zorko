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
      file: null
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


  handleClose = () => this.closeModal()

  handleFileSuccessUpload = (file, history) => {
    this.closeModal()
    if (this.props.onFileUploadSuccess) {
      this.props.onFileUploadSuccess(file.content)
    }
    history.push('/wizard/new-spec')
  }

  render = () =>
    (<Route children={({ history }) => (
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
          <div className={'modal-card'}>
            <header className="modal-card-head">
              <p className="modal-card-title">Upload Spec by</p>
              <button className="delete" aria-label="close" onClick={this.handleClose}/>
            </header>
            <section className="modal-card-body">
              <div className="new-spec-wizard-controls">
                <UploadFile onFileLoaded={(file) => this.handleFileSuccessUpload(file, history)}>
                  {(triggerUpload) => (
                    <button
                      onClick={triggerUpload}
                      className="button is-success">File</button>
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

NewSpecWizardButton = connect(null, mapDispatchToProps)(NewSpecWizardButton)

export { NewSpecWizardButton }

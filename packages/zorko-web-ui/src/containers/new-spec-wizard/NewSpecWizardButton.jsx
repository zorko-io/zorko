import React, { Component, Fragment } from 'react'
import Modal from 'react-modal'

export class NewSpecWizardButton extends Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false
    }
  }

  openModal = () => this.setState({ modalIsOpen: true })

  closeModal = () =>  this.setState({ modalIsOpen: false })

  handleClose = () => this.closeModal()

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
            <div className="container">
              <button className="button is-success">File</button>
              <br/>
              <span>or</span>
              <br/>
              <button className="button is-success">URL</button>
            </div>
          </section>
        </div>
        </Modal>
      </Fragment>
    )
  }
}


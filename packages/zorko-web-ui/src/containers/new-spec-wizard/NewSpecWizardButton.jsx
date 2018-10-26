import React, { Component, Fragment } from 'react'
import Modal from 'react-modal'

export class NewSpecWizardButton extends Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <Fragment>
        <a className="button" onClick={this.openModal}>
          + New
        </a>
        <Modal
          className="zr-modal modal"
          overlayClassName="zr-modal modal-background"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <span>Content</span>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button className="button">Cancel</button>
          </footer>
        </div>
        </Modal>
      </Fragment>
    )
  }
}


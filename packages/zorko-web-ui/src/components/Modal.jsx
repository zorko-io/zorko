import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'

export class Modal extends Component {
  render() {
    return (
      <ReactModal
        className="zr-modal modal"
        overlayClassName="zr-modal modal-background zr-modal-background-level"
        isOpen={this.props.isOpen}
        shouldCloseOnOverlayClick={true}
        contentLabel="Example Modal"
      >
        <div className={'modal-card'}>
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.title}</p>
            <button className="delete" aria-label="close" onClick={this.props.onClose}/>
          </header>
          <section className="modal-card-body">
            <div className="new-spec-wizard-controls">
              {this.props.children}
            </div>
          </section>
        </div>
      </ReactModal>
    )
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.element
}

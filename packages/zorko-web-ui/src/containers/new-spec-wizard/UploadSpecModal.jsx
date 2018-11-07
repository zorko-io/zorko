import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { UploadFile } from './UploadFile'
import Modal from 'react-modal'

export class UploadSpecModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vegaUploadError: null,
      vegaLiteUploadError: null,
    }
  }

  handleUploadFailure = (error, type) => {
    if (type === 'VEGA_LITE'){
      this.setState({
        vegaUploadError: null,
        vegaLiteUploadError: error
      })
    }else {
      this.setState({
        vegaUploadError: error,
        vegaLiteUploadError: null
      })
    }
    if (this.props.onSpecUploadFailed){
      this.props.onSpecUploadFailed(error, type);
    }
  }

  render() {
    return (
      <Modal
        className="zr-modal modal"
        overlayClassName="zr-modal modal-background zr-modal-background-level"
        isOpen={this.props.isOpen}
        shouldCloseOnOverlayClick={true}
        contentLabel="Example Modal"
      >
        <div className={'modal-card'}>
          <header className="modal-card-head">
            <p className="modal-card-title">Upload Specification</p>
            <button className="delete" aria-label="close" onClick={this.handleClose}/>
          </header>
          <section className="modal-card-body">
            <div className="new-spec-wizard-controls">
              <UploadFile
                onFileLoaded={(file) => this.props.onSpecUploadSuccess(file, 'VEGA_LITE')}
                onFileError={(error) => this.handleUploadFailure(error, 'VEGA_LITE')}
              >
                {(triggerUpload) => (
                  <Fragment>
                    <button
                      onClick={triggerUpload}
                      className="button is-success">Vega-Lite
                    </button>
                    {this.state.vegaLiteUploadError && this.renderFileErrorNotification(this.state.vegaLiteUploadError)}
                  </Fragment>
                )}
              </UploadFile>

              <div className="choose-message">
                <span>or</span>
              </div>
              <UploadFile
                onFileLoaded={(file) => this.props.onSpecUploadSuccess(file, 'VEGA')}
                onFileError={(error) => this.handleUploadFailure(error, 'VEGA')}
              >
                {(triggerUpload) => (
                  <Fragment>
                    <button
                      onClick={triggerUpload}
                      className="button is-success">Vega
                    </button>
                    {this.state.vegaUploadError && this.renderFileErrorNotification(this.state.vegaUploadError)}
                  </Fragment>
                )}
              </UploadFile>
            </div>
          </section>
        </div>
      </Modal>
    )
  }

  renderFileErrorNotification = (error) => {
    let message = error.message;
    if (error.code === 'PARSE_JSON') {
      message = 'Can\'t parse selected file, because it\'s not valid JSON format'
    } else if (error.code === 'UPLOAD_FILE_ERROR'){
      message = 'Can\'t upload selected file.'
    }

    return (
      <div style={{color: 'red'}}>
        <div>{message}</div>
      </div>
    )

  }

}

UploadSpecModal.defaultProp = {
  isOpen: true
}

UploadSpecModal.propTypes = {
  close: PropTypes.func,
  isOpen: PropTypes.bool,
  onSpecUploadSuccess: PropTypes.func,
  onSpecUploadFailed: PropTypes.func
}
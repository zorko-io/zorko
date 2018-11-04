import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export class UploadFile extends Component {
  constructor(props) {
    super(props)

    this.hiddenInput = null
  }

  handleClick = () => this.hiddenInput && this.hiddenInput.click()

  clearClickRef = (event) => event.target.value = null

  handleError = (error) =>  {
    if (this.props.onFileError){
      this.props.onFileError(error)
    }else {
      throw  error
    }
  }

  handleFileSelection = () => {
    if (!this.hiddenInput || !this.hiddenInput.files) {
      return
    }

    const file = this.hiddenInput.files[0]
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = (event) => {
      if (this.props.onFileLoaded) {
        try {
          let fileContent = {
            content: JSON.parse(event.target.result),
            type: file.type,
            name: file.name
          }

          this.props.onFileLoaded(fileContent)
        } catch (error) {
          this.handleError({
            ...error,
            code: 'PARSE_JSON',
          })
        }
      }
    }

    reader.onerror = (error) => {
      this.handleError({
        ...error,
        code: 'UPLOAD_FILE_ERROR',
      })
    }
  }

  render = () => (
    <Fragment>
      <input
        ref={(input) => this.hiddenInput = input}
        style={{ display: 'none' }}
        type="file"
        name=""
        id=""
        onChange={this.handleFileSelection}
        onClick={this.clearClickRef}
      />
      {this.props.children(this.handleClick)}
    </Fragment>
  )
}

UploadFile.propTypes = {
  onFileLoaded: PropTypes.func,
  onFileError: PropTypes.func
}

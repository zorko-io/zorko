import React, { Component, Fragment } from 'react'

export class UploadFile extends Component {
  constructor(props) {
    super(props)

    this.hiddenInput = null
  }

  handleClick = () => this.hiddenInput && this.hiddenInput.click()

  clearClickRef = (event) => event.target.value = null

  handleFileSelection = () => {
    if (!this.hiddenInput || !this.hiddenInput.files) {
      return
    }

    const file = this.hiddenInput.files[0]
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = (event) => {
      if (this.props.onFileLoaded) {
        let fileContent = {
          content: JSON.parse(event.target.result),
          type: file.type,
          name: file.name
        }

        this.props.onFileLoaded(fileContent)
      }
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

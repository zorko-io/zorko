import React, { Component } from 'react'

export const UploadFileContext = React.createContext({
  file: null,
  error: null
})

export class UploadFile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: null,
      error: null
    }
    this.hiddenInput = null
  }

  handleClick = () => this.hiddenInput && this.hiddenInput.click()

  clearClickRef = (event) => event.target.value = null

  componentWillUnmount() {
    if (this.props.onFileReady && this.state.file) {
      this.props.onFileReady(this.state.file)
    }
  }

  handleFileSelection = () => {
    if (!this.hiddenInput || !this.hiddenInput.files) {
      return
    }

    this.setState({
      file: null,
      error: null
    })

    const file = this.hiddenInput.files[0]
    try {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = (event) => {

        try {
          let fileContent = {
            content: JSON.parse(event.target.result),
            type: file.type,
            name: file.name
          }

          this.setState({
            file: fileContent
          })
        } catch (error) {
          this.setState({
            error
          })
        }
      }
    } catch (error) {
      this.setState({
        error
      })
    }
  }

  render = () => (
    <UploadFileContext.Provider value={this.state}>
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
    </UploadFileContext.Provider>
  )

}

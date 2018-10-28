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
      reader.onload = (event) => this.setState({
        file: {
          content: event.target.result,
          type: file.type,
          name: file.name
        }
      })
    } catch (error) {
      this.setState({
        error: error
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

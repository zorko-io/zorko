import React, { Component, Fragment } from 'react'

export class UploadFile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: null,
      error: null
    }
    this.hiddenInput = null;
  }

  handleClick = () => this.hiddenInput && this.hiddenInput.click()

  clearClickRef = (event) => event.target.value = null

  handleFileSelection = () => {
     if (!this.hiddenInput || !this.hiddenInput.files ) {
       return;
     }

     this.setState({
       file: null,
       error: null
     })

    const file = this.hiddenInput.files[0];
    try {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (event) => this.setState({
        file: {
          content: event.target.result,
          type: file.type,
          name: file.name
        }
      });
    } catch (error) {
      this.setState({
        error: error
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
      {this.props.children(this.handleClick, this.state.file, this.state.error)}
  </Fragment>
  )

}

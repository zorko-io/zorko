import React, { Component } from 'react'

export class NewSpecErrorBoundary extends Component {

  constructor(props) {
    super(props)

    this.state = {
      error: null,
      errorInfo: null
    }
  }


  componentDidCatch(error, errorInfo) {
    this.setState({
      ...this.state,
      error,
      errorInfo
    })
  }

  renderErrorMessage = () => (<div>
    <div>{this.state.error.message}</div>
    {/*<div>{this.state.error.stack}</div> */}
  </div>)


  render() {
    if (this.state.error) {
      return this.renderErrorMessage();
    }else {
      return this.props.children;
    }
  }
}

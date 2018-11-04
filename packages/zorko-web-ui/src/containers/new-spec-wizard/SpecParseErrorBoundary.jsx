import React, { Component } from 'react'

export class SpecParseErrorBoundary extends Component {

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
    <div>Invalid <span>{`${this.props.isVegaLite ? 'Vega-Lite' : 'Vega'}`}</span> specification.</div>
  </div>)


  render() {
    if (this.state.error) {
      return this.renderErrorMessage();
    }else {
      return this.props.children;
    }
  }
}

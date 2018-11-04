import React, { Component } from 'react'

export class SpecParseErrorBoundary extends Component {

  constructor(props) {
    super(props)
  }

  componentDidCatch(error, errorInfo) {
    this.props.onParseError && this.props.onParseError(error, errorInfo);
  }


  renderErrorMessage = () => (<div>
    <div>Invalid <span>{`${this.props.isVegaLite ? 'Vega-Lite' : 'Vega'}`}</span> specification.</div>
  </div>)


  render() {
    if (this.props.hasError) {
      return this.renderErrorMessage();
    }else {
      return this.props.children;
    }
  }
}

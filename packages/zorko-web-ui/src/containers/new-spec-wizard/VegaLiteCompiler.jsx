import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compile } from 'vega-lite'

export class VegaLiteCompiler extends Component {
  render() {

    let spec;
    let isEmptySpec = !this.props.spec;

    if (!isEmptySpec) {
      spec = compile(this.props.spec).spec
    }

    return (
      <div>
        {!isEmptySpec && this.props.children(spec)}
      </div>
    )
  }
}

VegaLiteCompiler.propTypes = {
  spec: PropTypes.object,
  children: PropTypes.func.isRequired
}

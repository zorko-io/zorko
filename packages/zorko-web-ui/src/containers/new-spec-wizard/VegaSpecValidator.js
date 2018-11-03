import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compile } from 'vega-lite'

export class VegaSpecValidator extends Component {
  render() {

    let spec;
    let error;
    let isEmptySpec = !this.props.spec;

    if (!isEmptySpec) {
      try{
        spec = compile(this.props.spec).spec
      } catch (err) {
        error = err;
      }
    }

    return (
      <div>
        {!isEmptySpec && this.props.children(error, spec)}
      </div>
    )
  }
}

VegaSpecValidator.propTypes = {
  spec: PropTypes.object,
  children: PropTypes.func.isRequired
}

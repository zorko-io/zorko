import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Api from '../api'

export class ReadPreviewResources extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      wasLoaded: false,
      previews: []
    }
  }

  handleSuccess = (response) => {
    this.setState({
      isLoading: false,
      wasLoaded: true,
      previews: response
    })
  }

  handleError = (err) => {
    throw  err
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.offset !== this.props.offset || nextProps.limit !== this.props.limit) {
      this.requestResources({
        limit: nextProps.limit,
        offset: nextProps.offset
      });
    }
  }

  requestResources({limit, offset}) {
    return Api
      .fetchSpecLookups({
        offset,
        limit
      })
      .then(this.handleSuccess)
      .catch(this.handleError)
  }

  componentDidMount() {
     this.requestResources({
       limit: this.props.limit,
       offset: this.props.offset
     });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.wasLoaded && this.props.children(this.state.previews)}
        {!this.state.wasLoaded && this.props.fallback}
      </React.Fragment>
    )
  }
}

ReadPreviewResources.defaultProps = {
  offset: 0,
  limit: 9
}

ReadPreviewResources.propTypes = {
  children: PropTypes.func.isRequired,
  fallback: PropTypes.element,
  offset: PropTypes.number,
  limit: PropTypes.number
}

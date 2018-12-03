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

    console.log('RESPONSE', response)
    console.log('STATE', this.state)
  }

  handleError = (err) => {
    throw  err
  }

  componentDidMount() {
    Api
      .fetchSpecLookups({
        offset: this.props.offset,
        limit: this.props.limit
      })
      .then(this.handleSuccess)
      .catch(this.handleError)
  }

  render() {
    return (
      <React.Fragment>
        {this.state.wasLoaded && this.props.children(this.state.previews)}
        {this.state.isLoading && this.props.fallback}
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

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { UploadFileContext } from './UploadFile'
import * as _ from 'lodash'

class ErrorUpload extends Component {
  componentDidMount () {
    if (this.props.onFileError) {
      this.props.onFileError(this.props.error);
    }
  }

  render = () => (<Fragment>{this.props.children}</Fragment>)
}

ErrorUpload.propTypes = {
  onFileReady: PropTypes.func,
  file: PropTypes.object.isRequired
}

export class UploadFileError extends Component {
  render = () => <UploadFileContext.Consumer>
    {({error})=> error && (<Fragment>
      <ErrorUpload
        onFileError={this.props.onFileError}
        error={error}
      >
        {_.isFunction(this.props.children) ? this.props.children(error) : this.props.children}
      </ErrorUpload>
    </Fragment>)}
    </UploadFileContext.Consumer>
}

UploadFileError.propTypes = {
  onFileError: PropTypes.func
}


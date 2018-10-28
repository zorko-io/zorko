import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { UploadFileContext } from './UploadFile'
import * as _ from 'lodash'

class SuccessUpload extends Component {
  componentDidMount () {
    if (this.props.onFileReady) {
      this.props.onFileReady(this.props.file);
    }
  }

  render = () => (<Fragment>{this.props.children}</Fragment>)
}

SuccessUpload.propTypes = {
  onFileReady: PropTypes.func,
  file: PropTypes.object.isRequired
}

export class UploadFileSuccess extends Component {
  render = () => <UploadFileContext.Consumer>
    {({file})=> file && (<Fragment>
      <SuccessUpload
        onFileReady={this.props.onFileReady}
        file={file}
      >
        {_.isFunction(this.props.children) ? this.props.children(file) : this.props.children}
      </SuccessUpload>
    </Fragment>)}
    </UploadFileContext.Consumer>
}

UploadFileSuccess.propTypes = {
  onFileReady: PropTypes.func
}


import React, { Component } from 'react'
import { Modal } from '../../components/Modal'
import AuthButton from './AuthButton'
import PropTypes from "prop-types";
import { connect } from 'react-redux'

class AuthModal extends Component {
  render() {
    return (
      <Modal title={'Please `Sing-In` before `Publish`'} isOpen={this.props.isOpen}>
        <AuthButton/>
      </Modal>
    )
  }
}

AuthModal.propTypes = {
  isOpen : PropTypes
}

const mapStateToProps = (state) => ({
  isOpen: state.auth.shouldShowModal
})

export default connect(mapStateToProps)(AuthModal)

import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {authLogin} from "../../action/auth";
import {isAuthenticated} from "../../selector/auth";

class SignInButton extends Component {

  handleSingIn = () => {
    this.props.login();
  };

  render() {
    return this.props.shouldShow ? (
      <a
        className="button is-primary"
        onClick={this.handleSingIn}
      >
        <strong>Sign-in</strong>
      </a>) : null;
  }
}

SignInButton.propTypes = {
  shouldShow: PropTypes.bool,
  login: PropTypes.func
};

const mapStateToProps = (state) => ({
  shouldShow: !isAuthenticated(state.auth)
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      login: authLogin
    },
    dispatch
  )


export default connect(mapStateToProps, mapDispatchToProps)(SignInButton);

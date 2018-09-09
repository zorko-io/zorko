import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {authLogin} from "../../action/auth";

class SignInButton extends Component {

  handleSingIn = () => {
    this.props.login();
  };

  render() {
    return (
      <a
        className="button is-primary"
        onClick={this.handleSingIn}
      >
        <strong>Sign-in</strong>
      </a>

    )
  }
}

SignInButton.propTypes = {
  login: PropTypes.func
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      login: authLogin
    },
    dispatch
  )


export default connect(null, mapDispatchToProps)(SignInButton);

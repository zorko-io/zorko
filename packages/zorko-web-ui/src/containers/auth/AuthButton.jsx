import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {authLogin} from "../../action/auth";
import {isAuthenticated} from "../../selector/auth";

class SignButton extends Component {

  handleSingIn = () => {
    this.props.login();
  };

  render() {
    const {shouldShow, label } = this.props;

    return shouldShow ? (
      <a
        className="button is-primary"
        onClick={this.handleSingIn}
      >
        <strong>{label ? label : 'Sing in'}</strong>
      </a>) : null;
  }
}

SignButton.propTypes = {
  shouldShow: PropTypes.bool,
  login: PropTypes.func,
  label: PropTypes.string
};

const mapStateToProps = (state, ownProps) => ({
  shouldShow: !isAuthenticated(state.auth),
  ...ownProps
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      login: authLogin
    },
    dispatch
  )


export default connect(mapStateToProps, mapDispatchToProps)(SignButton);

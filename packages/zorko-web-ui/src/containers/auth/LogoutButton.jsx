import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {authLogout} from "../../action/auth";

class LogoutButton extends Component {

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <a className="button" onClick={this.handleLogout}>
        Logout
      </a>

    )
  }
}

LogoutButton.propTypes = {
  logout: PropTypes.func
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logout: authLogout
    },
    dispatch
  )


export default connect(null, mapDispatchToProps)(LogoutButton);

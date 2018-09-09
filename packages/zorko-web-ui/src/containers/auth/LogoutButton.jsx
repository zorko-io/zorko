import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {authLogout} from "../../action/auth";
import {isAuthenticated} from "../../selector/auth";

class LogoutButton extends Component {

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return this.props.shouldShow ? (<a className="button" onClick={this.handleLogout}>
      Logout
    </a>): null;
  }
}

LogoutButton.propTypes = {
  shouldShow: PropTypes.bool,
  logout: PropTypes.func
};

const mapStateToProps = (state) => ({
  shouldShow: isAuthenticated(state.auth)
});


const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logout: authLogout
    },
    dispatch
  )


export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);

import React, { Component } from 'react'
import SingInButton from "../auth/SingInButton";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {authLogout} from "../../action/auth";

let feedbackUrl;
if (typeof process.env.REACT_APP_ZORKO_FEEDBACK_FORM !== 'undefined') {
  feedbackUrl = process.env.REACT_APP_ZORKO_FEEDBACK_FORM
}

class HomeIntroSection extends Component {

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              An online community to share, find and build vega visualizations
            </h1>
            <h2 className="subtitle">
              Charts, graphincs and maps build on top of public data (json,csv) in the web
            </h2>
            {feedbackUrl && (
              <a className="button is-primary" href={feedbackUrl}>
                Contact us
              </a>
            )}
            <SingInButton />
            <a className="button is-primary" onClick={this.handleLogout}>
              Logout
            </a>
          </div>
        </div>
      </section>
    )
  }
}

HomeIntroSection.propTypes = {
  logout: PropTypes.func
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logout: authLogout
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(HomeIntroSection);
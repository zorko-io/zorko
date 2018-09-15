import React, { Component } from 'react'
import AuthButton from "../auth/AuthButton";
import {isAuthenticated} from "../../selector/auth";
import {connect} from "react-redux";
import ContactUsButton from "../feedback/ContactUsButton";

class IntroSection extends Component {

  render() {
    return this.props.shouldShow ? (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              An online community to share, find and build vega visualizations
            </h1>
            <h2 className="subtitle">
              Charts, graphincs and maps build on top of public data (json,csv) in the web
            </h2>
            <div className={'field is-grouped'}>
              <p className={'control'}>
                <ContactUsButton/>
              </p>
              <p className={'control'}>
                <AuthButton label={'Sign up for Free'} />
              </p>

            </div>
          </div>
        </div>
      </section>
    ): null;
  }
}

const mapStateToProps = (state) => ({
  shouldShow: !isAuthenticated(state.auth)
});


export default connect(mapStateToProps)(IntroSection);

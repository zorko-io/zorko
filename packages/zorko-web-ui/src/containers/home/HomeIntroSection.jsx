import React, { Component } from 'react'
import SingInButton from "../auth/SingInButton";
import LogoutButton from "../auth/LogoutButton";

let feedbackUrl;
if (typeof process.env.REACT_APP_ZORKO_FEEDBACK_FORM !== 'undefined') {
  feedbackUrl = process.env.REACT_APP_ZORKO_FEEDBACK_FORM
}

class HomeIntroSection extends Component {

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
              <a className="button" href={feedbackUrl}>
                Contact us
              </a>
            )}
            <SingInButton />
          </div>
        </div>
      </section>
    )
  }
}

export default HomeIntroSection;

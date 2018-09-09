import {Component} from "react";
import React from "react";

let feedbackUrl;
if (typeof process.env.REACT_APP_ZORKO_FEEDBACK_FORM !== 'undefined') {
  feedbackUrl = process.env.REACT_APP_ZORKO_FEEDBACK_FORM
}

class ContactUsButton extends Component {

  render() {
    return <a className="button" href={feedbackUrl}>
      Contact us
    </a>
  }
}
export default ContactUsButton;

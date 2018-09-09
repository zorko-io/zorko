import React, {Component} from "react";

let apiUrl;

if (typeof process.env.REACT_APP_ZORKO_SERVER_BASE_URL !== 'undefined') {
  apiUrl = process.env.REACT_APP_ZORKO_SERVER_BASE_URL
}

export default class SignInButton extends Component {
  render() {
    return (
      <a className="button" href={`${apiUrl}\\auth\\github\\sign-in`}>
        Sign-in
      </a>

    )
  }
}

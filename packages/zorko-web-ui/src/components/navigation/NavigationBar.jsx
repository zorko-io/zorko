import logo from '../../logo.png'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {authLogin} from "../../action/auth";

class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuActive: false
    }
  }

  handleBurgerClick = () => {
    const { isMenuActive } = this.state
    this.setState({
      isMenuActive: !isMenuActive
    })
  }

  handleSingIn = () => {
    this.props.authLogin();
  }

  render() {
    const { isMenuActive } = this.state

    return (
      <nav className="navbar" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src={logo} alt="Zorko: a place to discover and share visualizations" />
            </a>
            <a
              role="button"
              className={`navbar-burger burger ${isMenuActive ? 'is-active' : ''}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.handleBurgerClick}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <div className="navbar-item">
                <p className="control">
                  <a
                    className="button is-primary"
                    onClick={this.handleSingIn}
                  >
                    <strong>Sign-in</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

NavigationBar.propTypes = {
  authLogin: PropTypes.func
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      authLogin
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(NavigationBar);

import logo from '../../../logo.png'
import React, { Component } from 'react'
import AuthButton from "../auth/AuthButton";
import LogoutButton from "../auth/LogoutButton";

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
                  <AuthButton/>
                  <LogoutButton/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}


export default NavigationBar;
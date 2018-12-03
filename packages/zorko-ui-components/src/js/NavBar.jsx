import React from 'react'
import logo from '../img/logo.png'

export const NavBar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img src={logo}/>
      </a>
    </div>
  </nav>
)



NavBar.propTypes = {}

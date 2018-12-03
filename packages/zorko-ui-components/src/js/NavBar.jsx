import React from 'react'
import PropTypes from 'prop-types'

export const NavBar = (props) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img src={props.logo}/>
      </a>
    </div>
  </nav>
)


NavBar.propTypes = {
  logo: PropTypes.string,
}

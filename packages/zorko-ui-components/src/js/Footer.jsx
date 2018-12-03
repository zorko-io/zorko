import React from 'react'
import PropTypes from 'prop-types'

export const Footer = (props) => (
  <footer className="footer">
    {props.children}
  </footer>
)

Footer.propTypes = {
   children: PropTypes.element
}

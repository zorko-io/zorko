import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const clazz = ({fluid}) => classNames({
  'container': true,
  'is-fluid': Boolean(fluid)
})

export const Container = (props) => (
  <div className={clazz(props)} style={props.style}>
    {props.children}
  </div>
)

Container.defaultProps = {
  fluid: false
}

Container.propTypes = {
  fluid: PropTypes.bool
}

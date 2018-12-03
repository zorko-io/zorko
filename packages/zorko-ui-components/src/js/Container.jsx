import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const clazz = ({fluid}) => classNames({
  'container': true,
  'is-fluid': fluid
})

export const Container = (props) => (
  <div className={clazz(props)} {...props}>
    {props.children}
  </div>
)

Container.defaultProps = {
  fluid: false
}

Container.propTypes = {
  fluid: PropTypes.bool
}

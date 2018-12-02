import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const clazz = ({ type }) => classNames({
  'button': true,
  'is-primary': type === 'primary',
  'is-default': type === 'default'
})

export const Button = (props) => {
  return (
    <a
      className={clazz(props)}
      data-test="button"
      onClick={props.onClick}
    >
      {props.children}
    </a>
  )
}

Button.defaultProps = {
  type: 'default'
}

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary']),
  onClick: PropTypes.func,
  children: PropTypes.element
}


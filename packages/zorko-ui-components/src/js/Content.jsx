import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const clazz = ({size}) => classNames({
  'content': true,
  [`is-${size}`]: size
})

export const Content = (props) => (
  <div className={clazz(props)}>
    {props.children}
  </div>
)

Content.propTypes = {
  size: PropTypes.oneOf(['small','medium','large']),
  children: PropTypes.element
}

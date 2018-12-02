import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const figureClass = ({ size, ratio }) => classNames({
  'image': true,
  [`is-${size}x${size}`]: size && !ratio,
  [`is-${ratio}`]: ratio && !size
})

export const Image = (props) => (
  <figure className={figureClass(props)}>
    <img src={props.src} alt={props.alt}/>
  </figure>
)

Image.propTypes = {
  size: PropTypes.oneOf(['16', '24', '32', '48', '64', '96', '128']),
  ratio: PropTypes.oneOf(['1by1', '5by4', '4by3', '3by2', '5by3'])
}

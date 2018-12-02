import React from 'react'
import PropTypes from 'prop-types'

export const Media = (props) => (
    <div className='media'>
      {props.left && (<div className="media-left">
        {props.left}
      </div>)}

      {props.children && (<div className="media-content">
        {props.children}
      </div>)}
    </div>
)

Media.propTypes = {
  left: PropTypes.element,
  children: PropTypes.children,
}

import React from 'react'
import PropTypes from 'prop-types'

export const Card = (props) => (
  <div className="card">
    {props.image && ( <div className="card-image">
      {props.image}
    </div>)}

    {props.children && (<div className="card-content">
      {props.children}
    </div> )}
  </div>
)

Card.propTypes = {
  image: PropTypes.element,
  children: PropTypes.element,
}

import React from 'react'
import PropTypes from 'prop-types'

export const Pagination = (props) => (
<div className={'field is-grouped gallery-pagination-center'}>
  {props.prev && (<p className="control">{props.prev}</p>)}
  {props.next && (<p className="control">{props.next}</p>)}
</div>)

Pagination.propTypes = {
  prev: PropTypes.element,
  next: PropTypes.element,
}

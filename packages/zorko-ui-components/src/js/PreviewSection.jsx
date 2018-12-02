import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './Container'

export const PreviewSection = (props) => (
  <Container>
    <h1 className="title">{props.title}</h1>
    {props.previews}
    {props.pagination}
  </Container>
)

PreviewSection.propTypes = {
  title: PropTypes.string,
  previews: PropTypes.element,
  pagination: PropTypes.element,
}

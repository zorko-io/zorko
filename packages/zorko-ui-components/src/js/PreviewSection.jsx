import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './Container'

export const PreviewSection = (props) => (
  <Container>
    <h5 className={'subtitle is-5'}>{props.title}</h5>
    {props.previews}
    {props.pagination}
  </Container>
)

PreviewSection.propTypes = {
  title: PropTypes.string,
  previews: PropTypes.element,
  pagination: PropTypes.element,
}

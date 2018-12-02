import React from 'react'
import PropTypes from 'prop-types'
import { SvgView } from './SvgView'
import { Card } from './Card'

export const PreviewCard = (props) => {
  return (
    <Card image={
      <SvgView content={props.preview} />
    }>
      {props.children}
    </Card>
  )
}

PreviewCard.propTypes = {
  preview: PropTypes.string,
  children: PropTypes.element,
}

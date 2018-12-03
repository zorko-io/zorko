import React from 'react'
import { PreviewCard } from './PreviewCard'
import { PreviewCardsLayout } from './PreviewCardsLayout'
import * as R from 'ramda'
import PropTypes from 'prop-types'
import { PreviewCardAuthorMask } from './PreviewCardAuthorMask'

export const PreviewCardsMask = (props) => (
  <PreviewCardsLayout previews={R.range(0, props.count)}>
    {() => (
      <PreviewCard>
        <PreviewCardAuthorMask/>
      </PreviewCard>)}
  </PreviewCardsLayout>
)

PreviewCardsMask.defaultProps = {
  count: 9,
}

PreviewCardsMask.propTypes = {
  count: PropTypes.number,
}

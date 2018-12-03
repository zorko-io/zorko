import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

export const PreviewCardsLayout = (props) => (
    <div className="preview-grid">
      <div className="columns">
        {splitByColumns(props.previews, props.itemsInRow).map((rows, i) => (
          <div key={i} className="column">
            {rows.map((item, j) => (
              <div key={`${i}-${j}`} className="preview-grid-item">
                {props.children && props.children(item)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
)

function splitByColumns(previews, itemsInRow) {
  const length = previews.length
  const itemsInLastRow = length % itemsInRow
  const rowsCount = (length - itemsInLastRow) / itemsInRow + (itemsInLastRow ? 1 : 0)

  let result = R.range(1, rowsCount + 1).reduce(
    (memo, rowIndex) => {
      let previewChunkStartIndex = rowIndex > 0 ? (rowIndex - 1) * itemsInRow : 0
      let previewChunkEndRowIndex = rowIndex > 0 ? rowIndex * itemsInRow : itemsInRow
      if (rowIndex === rowsCount) {
        previewChunkEndRowIndex += itemsInLastRow
      }
      let chunk = previews.slice(previewChunkStartIndex, previewChunkEndRowIndex)

      if (chunk.length > 0) {
        memo[0].push(chunk[0])
      }
      if (chunk.length > 1) {
        memo[1].push(chunk[1])
      }
      if (chunk.length > 2) {
        memo[2].push(chunk[2])
      }

      return memo
    },
    [[], [], []]
  )

  return result
}

PreviewCardsLayout.defaultProps = {
  itemsInRow: 3,
  previews: []
}

PreviewCardsLayout.propTypes = {
  itemsInRow: PropTypes.number,
  previews: PropTypes.array,
  children: PropTypes.func
}

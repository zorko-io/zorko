import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as R from 'ramda'
import PreviewCard from './PreviewCard'
import { previews } from '../../../selector/index'
import { Link } from 'react-router-dom'

class PreviewGrid extends Component {
  render() {
    const columns = this.columns;
    return (
      <Fragment>
        <div className="preview-grid">
          <div className="columns">
            {columns.map((rows, i) => (
              <div key={i} className="column">
                {rows.map((spec, j) => (
                  <div key={`${i}-${j}`} className="preview-grid-item">
                    <Link to={`/specs/${spec.id}`}>
                      <PreviewCard title={spec.title} content={spec.preview} />
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }

  get columns() {
    const { previews } = this.props

    const length = previews.length
    const ITEMS_IN_ROW = 3
    const itemsInLastRow = length % ITEMS_IN_ROW
    const rowsCount = (length - itemsInLastRow) / ITEMS_IN_ROW + (itemsInLastRow ? 1 : 0)

    return R.range(1, rowsCount + 1).reduce(
      (memo, rowIndex) => {
        let previewChunkStartIndex = rowIndex > 0 ? (rowIndex - 1) * ITEMS_IN_ROW : 0
        let previewChunkEndRowIndex = rowIndex > 0 ? rowIndex * ITEMS_IN_ROW : ITEMS_IN_ROW
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
  }
}

PreviewGrid.propTypes = {
  previews: PropTypes.array.isRequired,
}

PreviewGrid.defaultProps = {
  previews: [],
}

const mapStateToProps = (state, ownProps) => ({
  previews: previews.getAll(state),
  ...ownProps
});

export default connect(mapStateToProps)(PreviewGrid)

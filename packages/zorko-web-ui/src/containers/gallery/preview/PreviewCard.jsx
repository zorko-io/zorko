import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { resizeSvgContent } from '../../../util/resize-svg-content'

const DEFAULT_MIN_WIDTH = 280
const DEFAULT_MIN_HEIGHT = 158

class PreviewCard extends Component {
  render() {
    let { content, title } = this.props
    content = content ? content : PreviewCard.defaultProps.content
    title = title ? title : PreviewCard.defaultProps.title
    content = resizeSvgContent({
      content,
      width: DEFAULT_MIN_WIDTH,
      height: DEFAULT_MIN_HEIGHT
    })

    return (
      <div className="card">
        <div className="card-image">
          <figure
            ref={this.svgParent}
            className="image"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-32x32">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
              </figure>
            </div>
            <div className="media-content">
              <p className="title">{title}</p>
              <p className="subtitle">nesterone</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

PreviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string
}

PreviewCard.defaultProps = {
  content: `<svg width="${DEFAULT_MIN_WIDTH}" height="${DEFAULT_MIN_HEIGHT}"/>`,
  title: 'Untitled'
}
export default PreviewCard

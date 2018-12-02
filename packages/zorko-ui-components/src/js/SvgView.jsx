import React from 'react'
import PropTypes from 'prop-types'


const resizeSvgContent = ({ content, width, height }) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(content, 'image/svg+xml')
  const node = doc.children[0]
  node.setAttribute('width', width)
  node.setAttribute('height', height)
  return node.outerHTML
}

export const  SvgView = ({ content, width = 280, height = 158}) => (
  <figure
    className="image"
    dangerouslySetInnerHTML={{ __html: resizeSvgContent({
        content: content ? content : `<svg width="${width}" height="${height}"/>`,
        width,
        height
      })
    }}
  />
)

SvgView.propTypes = {
   content: PropTypes.string
}

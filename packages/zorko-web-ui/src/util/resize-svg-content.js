export const resizeSvgContent = ({ content, width, height }) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(content, 'image/svg+xml')
  const node = doc.children[0]
  node.setAttribute('width', width)
  node.setAttribute('height', height)
  return node.outerHTML
}

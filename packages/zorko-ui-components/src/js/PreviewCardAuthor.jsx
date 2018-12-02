import React from 'react'
import PropTypes from 'prop-types'
import { Media } from './Media'
import { Image } from './Image'
import { Content } from './Content'

export const PreviewCardAuthor = (props) => (
  <Media left={<Image size={'32'} src={props.avatar}/>}>
    <Content size={'small'}>
      <p className="title is-6">{props.title ? props.title : PreviewCardAuthor.defaultProps.title}</p>
      {props.login && (<p className="subtitle is-6">{props.login}</p>) }
    </Content>
  </Media>
)

PreviewCardAuthor.defaultProps = {
  title: 'Untitled',
  avatar: 'https://bulma.io/images/placeholders/32x32.png'
}

PreviewCardAuthor.propTypes = {
  avatar: PropTypes.string,
  title: PropTypes.string,
  login: PropTypes.string
}

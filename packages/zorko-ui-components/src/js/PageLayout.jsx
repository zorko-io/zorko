import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './Container'

export const PageLayout = (props) => (
  <React.Fragment>
    {props.navbar}
    <main>
      <Container fluid={true} style={{
        backgroundColor: '#f0f0f0',
        margin: 0
      }}>
        {props.main}
      </Container>
    </main>
    {props.footer}
  </React.Fragment>)

PageLayout.propTypes = {
  navbar: PropTypes.element,
  main: PropTypes.element,
  footer: PropTypes.element,
}

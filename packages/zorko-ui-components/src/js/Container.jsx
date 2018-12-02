import React from 'react'
import classNames from 'classnames'

const clazz = () => classNames({
  'container': true
})

export const Container = (props) => (
  <div className={clazz(props)}>
    {props.children}
  </div>
)

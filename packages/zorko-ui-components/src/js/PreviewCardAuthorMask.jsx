import React from 'react'
import { Media } from './Media'

export const PreviewCardAuthorMask = () => (
  <Media left={<div style={{
    width: 32,
    height: 32,
    backgroundColor: '#f0f0f0'
  }}></div>}>
    <div style={{
      width: 80,
      height: 10,
      backgroundColor: '#f0f0f0'
    }}/>
    <div style={{
      marginTop: 5,
      width: 50,
      height: 8,
      backgroundColor: '#f0f0f0'
    }}/>
  </Media>
)

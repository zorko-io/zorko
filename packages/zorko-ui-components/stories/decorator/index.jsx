import React from 'react'

export const CenterDecorator = (storyFn) => (
  <div style={{
    textAlign: 'center',
    marginTop: '5rem'
  }}>
    { storyFn() }
  </div>
);

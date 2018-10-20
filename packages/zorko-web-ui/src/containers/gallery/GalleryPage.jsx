import React, { Component } from 'react'
import Gallery from './Gallery'
import PageLayout from '../page/PageLayout'
import IntroSection from '../page/intro/IntroSection'

class GalleryPage extends Component {

  render() {
    return (
      <PageLayout>
        <IntroSection/>
        <main className={'app-main'}>
          <div className={'container'}>
            <Gallery/>
          </div>
        </main>
      </PageLayout>
    )
  }
}

export default GalleryPage

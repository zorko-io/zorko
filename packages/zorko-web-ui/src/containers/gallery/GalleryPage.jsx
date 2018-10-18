import React, {Component} from 'react'
import Gallery from "./Gallery";
import Page from '../page/Page'

class GalleryPage extends Component {

  render() {
    return  (
     <Page>
       <div className={'container'}>
        <Gallery/>
       </div>
     </Page>
    );
  }
}

export default GalleryPage;

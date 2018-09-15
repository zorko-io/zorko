import React, {Component} from 'react'
import Gallery from "./Gallery";
import Page from '../page/Page'

class GalleryPage extends Component {

  render() {
    return  (
     <Page>
       <Gallery/>
     </Page>
    );
  }
}

export default GalleryPage;

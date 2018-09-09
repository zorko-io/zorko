import React, {Component, Fragment} from 'react'
import Gallery from "./Gallery";
import IntroSection from "../intro/IntroSection";

class GalleryPage extends Component {

  render() {
    return  (
     <Fragment>
       <IntroSection/>
       <Gallery/>
     </Fragment>
    );
  }
}

export default GalleryPage;

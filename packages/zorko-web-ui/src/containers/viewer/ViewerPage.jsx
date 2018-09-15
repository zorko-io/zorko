import React, {Component} from 'react'
import Page from '../page/Page'

class ViewerPage extends Component {

  render() {
    return  (
      <Page shouldShowIntroSection={false}>
        <span>Viewer</span>
      </Page>
    );
  }
}

export default ViewerPage;

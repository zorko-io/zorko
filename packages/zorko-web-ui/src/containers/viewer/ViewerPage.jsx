import React, {Component} from 'react'
import Page from '../page/Page'
import PropTypes from "prop-types";

class ViewerPage extends Component {

  componentDidMount () {

  }

  render() {
    return  (
      <Page shouldShowIntroSection={false}>
        <span>Viewer</span>
      </Page>
    );
  }
}

ViewerPage.propTypes = {
  requestSpec: PropTypes.bool
}

export default ViewerPage;

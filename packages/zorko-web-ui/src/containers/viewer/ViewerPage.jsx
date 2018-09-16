import React, {Component} from 'react'
import Page from '../page/Page'
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux'
import { specRequest } from '../../action'
import { connect } from 'react-redux'

class ViewerPage extends Component {

  componentDidMount () {
    let specId = this.props.match.params.specId
    if (specId){
      this.props.requestSpec(specId);
    }
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
  requestSpec: PropTypes.func
}


const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      requestSpec: specRequest
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(ViewerPage);

import React, {Component} from 'react'
import Page from '../page/Page'
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux'
import { specRequest } from '../../action'
import { connect } from 'react-redux'
import Vega from 'react-vega';

class ViewerPage extends Component {

  componentDidMount () {
    let specId = this.props.match.params.specId
    if (specId){
      this.props.requestSpec(specId);
    }
  }

  render() {
    const {spec} = this.props;

    return  (
      <Page shouldShowIntroSection={false}>
        <span>Viewer</span>
        {spec && <Vega spec={spec}/> }
      </Page>
    );
  }
}

ViewerPage.propTypes = {
  requestSpec: PropTypes.func,
  spec: PropTypes.object
}


const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      requestSpec: specRequest
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(ViewerPage);

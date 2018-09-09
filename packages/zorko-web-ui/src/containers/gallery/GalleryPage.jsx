import React, { Component, Fragment } from 'react'
import PreviewGrid from '../preview/PreviewGrid'
import connect from 'react-redux/es/connect/connect'
import GalleryIntroSection from '../intro/IntroSection'
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {specLookupsRequest} from "../../action";

const getPageId = (props) => (Number(props.match.params.pageId));

class GalleryPage extends Component {

  get pageId () {
    return getPageId(this.props);
  }

  componentDidMount () {
    this.requestPreviews(this.pageId);
  }

  componentWillReceiveProps (nextProps) {
    const prevPageId = this.pageId;
    const nextPageId = getPageId(nextProps);
    if (prevPageId !== nextPageId) {
      this.requestPreviews(nextPageId);
    }
  }

  requestPreviews = (pageId) => {
    let limit = 10;
    let offset = 1;

    if (pageId) {
      offset = pageId * 9;
      limit =  9;
    }
    this.props.requestPreviews({limit, offset})
  };

  render() {
    const { match } = this.props;

    return (
      <Fragment>
        <GalleryIntroSection />
        <PreviewGrid />
        {this.pageId && (
          <Link to={`${match.path.replace(':pageId', this.pageId - 1)}`}>
            <button className="button is-disabled">Prev</button>
          </Link>
        )}
        <Link to={`${match.path.replace(':pageId', this.pageId + 1)}`}>
          <button className="button is-primary">Next</button>
        </Link>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      requestPreviews: specLookupsRequest
    },
    dispatch
  )

export default connect(
  null, mapDispatchToProps
)(GalleryPage)

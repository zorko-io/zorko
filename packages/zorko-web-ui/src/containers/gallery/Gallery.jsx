import React, { Component, Fragment } from 'react'
import PreviewGrid from '../preview/PreviewGrid'
import connect from 'react-redux/es/connect/connect'
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {specLookupsRequest} from "../../action";
import {withRouter} from "react-router";

const getPageId = (props) => (Number(props.match.params.pageId));

class Gallery extends Component {

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
    let limit = 9;
    let offset = 1;

    if (pageId) {
      offset = pageId * 9;
      limit =  9;
    }
    this.props.requestPreviews({limit, offset})
  };

  get shouldShowPrevControl () {
    return this.pageId > 0;
  }

  render() {
    const { match } = this.props;

    return (
      <Fragment>
        <PreviewGrid />

        <div className={'container gallery-pagination'}>
          {this.shouldShowPrevControl && (
            <Link to={`${match.path.replace(':pageId', this.pageId - 1)}`}>
              <button className="button is-disabled">Prev</button>
            </Link>
          )}
          <Link to={`/gallery/${(this.pageId ? this.pageId : 0) + 1}`}>
            <button className="button is-primary">Next</button>
          </Link>
        </div>

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
  );

export default withRouter(connect(
  null, mapDispatchToProps
)(Gallery))

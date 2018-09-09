import React, { Component, Fragment } from 'react'
import PreviewGrid from '../preview/PreviewGrid'
import connect from 'react-redux/es/connect/connect'
import PropTypes from 'prop-types'
import GalleryIntroSection from './GalleryIntroSection'
import * as previews from "../../selector/previews";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {specLookupsRequest} from "../../action";

class GalleryPage extends Component {

  get pageId () {
    return Number(this.props.match.params.pageId);
  }

  componentDidMount () {
    let limit = 10;
    let offset = 1;

    if (this.pageId) {
      offset = this.pageId * 9;
      limit =  9;
    }
    this.props.requestPreviews({limit, offset})
  }

  render() {
    const { previousUrl, nextUrl } = this.props;

    return (
      <Fragment>
        <GalleryIntroSection />
        <PreviewGrid />
        {previousUrl && (
          <Link to={previousUrl}>
            <button className="button is-disabled">Prev</button>
          </Link>
        )}
        <Link to={nextUrl}>
          <button className="button is-primary">Next</button>
        </Link>
      </Fragment>
    )
  }
}

GalleryPage.propTypes = {
  previousUrl: PropTypes.string,
  nextUrl: PropTypes.string
};

const mapStateToProps = (state) => ({
  previousUrl: previews.getPreviousUrl(state),
  nextUrl: previews.getNextUrl(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      requestPreviews: specLookupsRequest
    },
    dispatch
  )

export default connect(
  mapStateToProps, mapDispatchToProps
)(GalleryPage)

import React, { Component, Fragment } from 'react'
import {
  PreviewSection,
  PreviewCardsLayout,
  Container,
  PageLayout,
  PreviewCard,
  PreviewCardAuthor,
  Pagination,
  Button ,
  NavBar,
  Footer,
  PreviewCardsMask
} from 'zorko-ui-components'
import { ReadPreviewResources } from '../../resources/ReadPreviewResources'
import { Link } from 'react-router-dom'

class GalleryPage extends Component {

  componentDidMount() {
    // this.requestPreviews(0)
  }

  requestPreviews = (pageId) => {
    // let limit = 9
    // let offset = 0
    //
    // if (pageId) {
    //   offset = pageId * limit
    // }
    // this.props.requestPreviews({ limit, offset })
  }

  get pageId () {
    return Number(this.props.match.params.pageId);
  }

  get pagginationOptions () {
    const pageId = this.pageId;
    let limit = 9
    let offset = 0

    if (pageId) {
      offset = pageId * limit
    }

    return {
      offset,
      limit
    }
  }


  render() {
    const {offset, limit} = this.pagginationOptions
    return (
      <PageLayout>
        <ReadPreviewResources
          limit={limit}
          offset={offset}
          fallback={
          <React.Fragment>
            <PreviewCardsMask count={9}/>
            <Pagination
              prev={limit && <Button loading={true}>Prev</Button>}
              next={<Button loading={true} type={'primary'}>Next</Button>}
            />
          </React.Fragment>
          }
        >
          {(previews)=> (
            <React.Fragment>
              <PreviewCardsLayout title="Recent" previews={previews}>
                {(item) => (
                  <PreviewCard preview={item.preview}>
                    <PreviewCardAuthor
                      title={item.title}
                      login={item.author.login}
                    />
                  </PreviewCard>)}
              </PreviewCardsLayout>
              <Pagination
                prev={
                  <Link to={`${this.props.match.path.replace(':pageId', this.pageId - 1)}`}>
                    <Button>Prev</Button>
                  </Link>
                }
                next={
                  <Link to={`/gallery/${(this.pageId ? this.pageId : 0) + 1}`}>
                    <Button type={'primary'}>Next</Button>
                  </Link>
                }
              />
            </React.Fragment>
          )}
        </ReadPreviewResources>
      </PageLayout>
    )
  }
}

// const mapStateToProps = (state, ownProps) => ({
//   previews: previews.getAll(state),
//   ...ownProps
// })
//
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       requestPreviews: specLookupsRequest
//     },
//     dispatch
//   )


export default GalleryPage;

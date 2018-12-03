import React, { Component } from 'react'
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
  Footer
} from 'zorko-ui-components'
import * as previews from '../../selector/previews'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { specLookupsRequest } from '../../action'

class GalleryPage extends Component {

  componentDidMount() {
    this.requestPreviews(0)
  }

  requestPreviews = (pageId) => {
    let limit = 9
    let offset = 0

    if (pageId) {
      offset = pageId * limit
    }
    this.props.requestPreviews({ limit, offset })
  }


  render() {
    const { previews } = this.props
    return (
      <PageLayout
        navbar={<NavBar logo={require('../../logo.png')}/>}
        main={(
        <PreviewSection
          title={'Recent'}
          previews={
            <PreviewCardsLayout previews={previews}>
              {(item) => (
                <PreviewCard preview={item.preview}>
                  <PreviewCardAuthor
                    title={item.title}
                    login={item.author.login}
                  />
                </PreviewCard>)}
            </PreviewCardsLayout>}
          pagination={
            <Pagination
              prev={<Button>Prev</Button>}
              next={<Button type={'primary'}>Next</Button>}
            />}
        />
        )}
        footer={
        <Footer>
          Footer 2018
        </Footer>
        }
      />

    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  previews: previews.getAll(state),
  ...ownProps
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      requestPreviews: specLookupsRequest
    },
    dispatch
  )


export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage)

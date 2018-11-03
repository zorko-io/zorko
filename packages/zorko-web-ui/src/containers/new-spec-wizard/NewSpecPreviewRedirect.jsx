import React  from 'react'
import * as _ from 'lodash'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

let NewSpecPreviewRedirect = (props) => !_.isEmpty(props.spec) &&
  <Route children={({match})=> {
    let url = '/wizard/new-spec'
    return match.url !== url && <Redirect to={url}/>
}} />


NewSpecPreviewRedirect.propTypes = {
  spec: PropTypes.object
}

const mapStateToProps = (state) => ({
  spec: state.newSpecWizard.spec
})

NewSpecPreviewRedirect = connect(mapStateToProps)(NewSpecPreviewRedirect)

export {NewSpecPreviewRedirect}

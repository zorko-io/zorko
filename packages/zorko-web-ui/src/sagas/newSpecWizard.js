import { NEW_SPEC_WIZARD_PUBLISH_REQUEST, newSpecWizardPublishError, newSpecWizardPublishSuccess } from '../action'
import * as Api from '../api'
import { call, put, takeLatest } from 'redux-saga/effects'

function* publishSpec(action) {
  try {
    const spec = yield call(Api.publishSpec, action.payload)
    yield put(newSpecWizardPublishSuccess(spec))
  } catch (e) {
    yield put(newSpecWizardPublishError(e))
  }
}

export function* watchPublish () {
  yield takeLatest(NEW_SPEC_WIZARD_PUBLISH_REQUEST, publishSpec)
}

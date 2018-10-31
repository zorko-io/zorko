import { takeLatest, put } from 'redux-saga/effects'
import { newSpecWizardFileSet } from '../action'

export function* handleError(action) {
  if (action.type.match(/(.*)ERROR$/)) {
    const error = action.payload
    yield put(newSpecWizardFileSet(error.message))
  }
}

export default function* watchErrors() {
  yield takeLatest('*', handleError)
}

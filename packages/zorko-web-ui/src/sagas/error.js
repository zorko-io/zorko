import { takeLatest, put } from 'redux-saga/effects'
import { errorRecoverableSet } from '../action'

export function* handleError(action) {
  if (action.type.match(/(.*)ERROR$/)) {
    const error = action.payload
    yield put(errorRecoverableSet(error.message))
  }
}

export default function* watchErrors() {
  yield takeLatest('*', handleError)
}

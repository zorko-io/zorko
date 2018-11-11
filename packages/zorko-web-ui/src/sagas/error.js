import { takeLatest, put } from 'redux-saga/effects'
import { errorRecoverableSet } from '../action'
import { authModalShow } from '../action/auth'
import { USER_PROFILE_SET_ERROR } from '../action/userProfile'

export function* handleError(action) {
  if (action.type.match(/(.*)ERROR$/)) {
    const error = action.payload.error

    if (error) {
      let response = error.response
      if (response) {
        if (response.status === 401) {
          yield put(authModalShow())
        }
      }
    } else  if (action.type === USER_PROFILE_SET_ERROR) {
      let response = error.response
      if (response) {
        if (response.status === 403) {
          yield put(authModalShow())
        }
      }
    }else {
      yield put(errorRecoverableSet(error.message))
    }
  }
}

export default function* watchErrors() {
  yield takeLatest('*', handleError)
}

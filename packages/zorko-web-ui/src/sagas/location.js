import { matchPath } from 'react-router-dom'
import { specLookupsRequest } from '../action'
import { takeLatest, put } from 'redux-saga/effects'

export default function* watchLocation() {
  yield takeLatest('@@router/LOCATION_CHANGE', function*({ payload: { pathname } }) {
    if (matchPath(pathname, { path: '/' })) {
      yield put(specLookupsRequest())
    }
  })
  yield takeLatest('@@router/LOCATION_CHANGE', function*({ payload: { pathname } }) {
    if (matchPath(pathname, { path: '/specs' })) {
      yield put(
        specLookupsRequest({
          limit: 50,
          offset: 25
        })
      )
    }
  })
}

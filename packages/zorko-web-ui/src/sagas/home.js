import { put, take, select } from 'redux-saga/effects'
import { SPECS_PAGE_REQUEST } from '../action/home'
import * as previews from '../selector/previews'
import { specLookupsRequest } from '../action'

export default function* watchHome() {
  while (true) {
    yield take(SPECS_PAGE_REQUEST)
    const limit = yield select(previews.getLimit)
    const offset = yield select(previews.getOffset)
    yield put(specLookupsRequest({ limit, offset }))
  }
}

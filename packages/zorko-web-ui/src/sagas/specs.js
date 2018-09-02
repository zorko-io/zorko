import { takeLatest, call, put } from 'redux-saga/effects'
import * as Api from '../api'
import { SPEC_LOOKUPS_REQUEST, specLookupsError, specLookupsSet } from '../action'

export function* fetchSpecLookup({ payload }) {
  try {
    const specLookups = yield call(Api.fetchSpecLookups, payload)
    yield put(specLookupsSet(specLookups))
  } catch (e) {
    yield put(specLookupsError(e))
  }
}

export default function* watchSpecs() {
  yield takeLatest(SPEC_LOOKUPS_REQUEST, fetchSpecLookup)
}

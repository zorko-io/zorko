import { takeLatest, call, put } from 'redux-saga/effects'
import * as Api from '../api'
import { SPEC_LOOKUPS_REQUEST, SPEC_REQUEST, specLookupsError, specLookupsSet, specSet, specSetError } from '../action'

export function* fetchSpecLookup({ payload }) {
  try {
    const specLookups = yield call(Api.fetchSpecLookups, payload)
    yield put(specLookupsSet(specLookups))
  } catch (e) {
    yield put(specLookupsError(e))
  }
}

export function* fetchSpec(action) {
  try {
    const spec = yield call(Api.fetchSpec, action.payload);
    yield put(specSet(spec));
  } catch (e) {
    yield put(specSetError(e))
  }
}

export default function* watchSpecs() {
  yield takeLatest(SPEC_LOOKUPS_REQUEST, fetchSpecLookup)
  yield takeLatest(SPEC_REQUEST, fetchSpec)
}

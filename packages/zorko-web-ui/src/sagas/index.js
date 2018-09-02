import { all } from 'redux-saga/effects'
import watchSpecs from './specs'
import watchErrors from './error'
import watchHome from './home'

export default function* watchAllSagas() {
  yield all([watchSpecs(), watchErrors(), watchHome()])
}

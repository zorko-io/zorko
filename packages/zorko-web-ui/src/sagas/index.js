import { all } from 'redux-saga/effects'
import watchSpecs from './specs'
import watchErrors from './error'
import watchHome from './home'
import watchBootstrap from "./bootstrap";

export default function* watchAllSagas() {
  yield all([
    watchBootstrap(),
    watchSpecs(),
    watchErrors(),
    watchHome()
  ])
}

import { all } from 'redux-saga/effects'
import watchSpecs from './specs'
import watchErrors from './error'
import watchHome from './home'
import watchBootstrap from "./bootstrap";
import watchAuth from "./auth";

export default function* watchAllSagas() {
  yield all([
    watchBootstrap(),
    watchAuth(),
    watchSpecs(),
    watchErrors(),
    watchHome()
  ])
}

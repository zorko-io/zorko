import { all } from 'redux-saga/effects'
import watchSpecs from './specs'
import watchErrors from './error'
import watchBootstrap from "./bootstrap";
import { watchPublish } from './newSpecWizard'

export default function* watchAllSagas() {
  yield all([
    watchBootstrap(),
    watchSpecs(),
    watchErrors(),
    watchPublish()
  ])
}

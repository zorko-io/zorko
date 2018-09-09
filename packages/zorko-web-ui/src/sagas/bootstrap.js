import {BOOTSTRAP_START} from "../action/bootstrap";
import {setBaseUrl} from "../api";
import {call, take} from "redux-saga/effects";

export default function* watchBootstrap() {
  while (true) {
    const { payload } = yield take(BOOTSTRAP_START);
    yield call(setBaseUrl, payload.baseUrl);
  }
}

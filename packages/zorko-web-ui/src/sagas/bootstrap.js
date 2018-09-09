import {BOOTSTRAP_START, bootstrapDone} from "../action/bootstrap";
import * as Api from "../api";
import {call, put, take} from "redux-saga/effects";

export default function* watchBootstrap() {
  while (true) {
    const { payload } = yield take(BOOTSTRAP_START);
    yield call(Api.setBaseUrl, payload.baseUrl);

    let token = yield call(Api.readStorageItem, 'ZORKO_AUTH_TOKEN');
    if (token) {
       yield call(Api.setToken, token);
    }
    yield put(bootstrapDone());
  }
}

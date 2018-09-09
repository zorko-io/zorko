import {BOOTSTRAP_START, bootstrapDone} from "../action/bootstrap";
import * as Api from "../api";
import {call, put, select, take} from "redux-saga/effects";
import {authTokenSet} from "../action/auth";
import {fetchAuthAccount} from "./auth";

export default function* watchBootstrap() {
  while (true) {
    try {
      const {payload} = yield take(BOOTSTRAP_START);
      yield call(Api.setBaseUrl, payload.baseUrl);

      const isThirdPartySignInStarted = yield call(Api.readStorageItem, 'ZORKO_SIGN_IN_THIRD_PARTY_STARTED');
      if (isThirdPartySignInStarted) {
        yield call(fetchAuthAccount);
        yield call(Api.removeStorageItem, 'ZORKO_SIGN_IN_THIRD_PARTY_STARTED');
        const token = yield select((state) => (state.auth.token));
        if (token) {
          yield call(Api.writeStorageItem, 'ZORKO_AUTH_TOKEN', token);
        } else {
          throw new Error('No auth token in app store');
        }
      }

      let token = yield call(Api.readStorageItem, 'ZORKO_AUTH_TOKEN');
      if (token) {
        yield call(Api.setToken, token);
        yield put(authTokenSet(token))
      }
      yield put(bootstrapDone());

    } catch (e) {

    }
  }
}

import {BOOTSTRAP_START, bootstrapDone} from "../action/bootstrap";
import * as Api from "../api";
import {call, put, take} from "redux-saga/effects";
import {AUTH_LOGIN, AUTH_LOGOUT, authTokenSet} from "../action/auth";
import {fetchUserProfile} from "./userProfile";

export default function* watchBootstrap() {
  while (true) {
    try {
      const {payload} = yield take(BOOTSTRAP_START);
      yield call(Api.setBaseUrl, payload.baseUrl);

      const isThirdPartySignInStarted = yield call(Api.readStorageItem, 'ZORKO_SIGN_IN_THIRD_PARTY_STARTED');
      if (isThirdPartySignInStarted) {
        const {token} = yield call(fetchUserProfile);
        yield call(Api.removeStorageItem, 'ZORKO_SIGN_IN_THIRD_PARTY_STARTED');
        if (token) {
          yield call(Api.writeStorageItem, 'ZORKO_AUTH_TOKEN', token);
          yield put(authTokenSet(token));
        }
      }

      let token = yield call(Api.readStorageItem, 'ZORKO_AUTH_TOKEN');
      if (token) {
        yield call(Api.setToken, token);
        yield put(authTokenSet(token));
        yield call(fetchUserProfile);

        yield take(AUTH_LOGOUT);
        yield call(Api.removeStorageItem, 'ZORKO_AUTH_TOKEN');
        yield call(Api.logout);
      }
      yield put(bootstrapDone());

      yield take(AUTH_LOGIN);
      token = yield call(Api.readStorageItem, 'ZORKO_AUTH_TOKEN');
      if (!token) {
        yield call(Api.writeStorageItem, 'ZORKO_SIGN_IN_THIRD_PARTY_STARTED', true);
        yield call(Api.singInWithThridPatry);
      }
    } catch (e) {
       console.error(e);
    }
  }
}

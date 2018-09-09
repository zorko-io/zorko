import {AUTH_LOGIN, authProfileSet, authProfileSetError} from "../action/auth";
import {call, put, take} from "redux-saga/effects";
import * as Api from "../api";

export function* fetchAuthAccount() {
  try {
    const profile = yield call(Api.fetchAuthAccount);
    yield put(authProfileSet(profile));
  } catch (e) {
    yield put(authProfileSetError(e));
  }
}

export default function* watchAuth() {
  while (true) {
    yield take(AUTH_LOGIN);

    const token = yield call(Api.readStorageItem, 'ZORKO_AUTH_TOKEN');
    if (!token) {
       yield call(Api.writeStorageItem, 'ZORKO_SIGN_IN_THIRD_PARTY_STARTED', true);
       yield call(Api.singInWithThridPatry);
    }

    // yield take(AUTH_LOGOUT);


  }
}

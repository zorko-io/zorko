import {call, put} from "redux-saga/effects";
import * as Api from "../api";
import {userProfileSet, userProfileSetError} from "../action/userProfile";

export function* fetchUserProfile() {
  try {
    const response = yield call(Api.fetchUserProfile);
    yield put(userProfileSet(response.user));
    return response;
  } catch (e) {
    yield put(userProfileSetError(e));
  }
}

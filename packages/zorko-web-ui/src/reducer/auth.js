import {DEFAULT_AUTH} from '../state'
import {AUTH_PROFILE_SET, AUTH_TOKEN_SET} from "../action/auth";

const initialState = { ...DEFAULT_AUTH };

export default function authReducer(state = initialState, action) {
  switch (action.type) {

    case (AUTH_TOKEN_SET):
      return {
        ...state,
        token: action.payload
      };
    case (AUTH_PROFILE_SET):
      return {
        ...state,
        profile: action.payload.user,
        token: action.payload.token
      };

    default:
      return state
  }
}

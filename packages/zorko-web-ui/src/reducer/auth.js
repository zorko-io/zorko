import {DEFAULT_AUTH} from '../state'
import {AUTH_TOKEN_SET} from "../action/auth";

const initialState = { ...DEFAULT_AUTH };

export default function authReducer(state = initialState, action) {
  switch (action.type) {

    case (AUTH_TOKEN_SET):
      return {
        ...state,
        token: action.payload
      };

    default:
      return state
  }
}

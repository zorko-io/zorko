import {DEFAULT_AUTH} from '../state'
import {
  AUTH_MODAL_HIDE,
  AUTH_MODAL_SHOW,
  AUTH_TOKEN_SET
} from '../action/auth'

const initialState = { ...DEFAULT_AUTH };

export default function authReducer(state = initialState, action) {
  switch (action.type) {

    case (AUTH_TOKEN_SET):
      return {
        ...state,
        token: action.payload
      };

    case (AUTH_MODAL_SHOW):
      return {
        // looks like we need to reset
        ...initialState,
        shouldShowModal: true
      }

    case (AUTH_MODAL_HIDE):
      return {
        ...state,
        shouldShowModal: false
      }

    default:
      return state
  }
}

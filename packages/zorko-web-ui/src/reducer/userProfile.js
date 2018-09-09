import {DEFAULT_USER_PROFILE} from '../state'
import {USER_PROFILE_SET} from "../action/userProfile";

const initialState = { ...DEFAULT_USER_PROFILE};

export default function userProfileReducer(state = initialState, action) {
  switch (action.type) {

    case (USER_PROFILE_SET):
      return {
        ...action.payload
      };

    default:
      return state
  }
}

import {DEFAULT_AUTH} from '../state'

const initialState = { ...DEFAULT_AUTH };

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

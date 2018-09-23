import { DEFAULT_VIEWER } from '../state'
import { SPEC_REQUEST } from '../action'

const initialState = { ...DEFAULT_VIEWER }

export default function viewer(state = initialState, action) {
  switch (action.type) {

    case SPEC_REQUEST :
      return {
        selectedSpecId: action.payload.id
      }

    default:
      return state
  }
}

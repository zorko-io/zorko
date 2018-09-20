import { DEFAULT_SPECS_STATE } from '../state'
import { SPEC_SET } from '../action'

const initialState = { ...DEFAULT_SPECS_STATE }

export default function specReducer(state = initialState, action) {
  switch (action.type) {

    case SPEC_SET :

      const payload = action.payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [payload.id] : payload.spec
        }
      }

    default:
      return state
  }
}

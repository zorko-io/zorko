import { DEFAULT_NEW_SPEC_WIZARD,  } from '../state'
import { NEW_SPEC_WIZARD_FILE_SET } from '../action'

const initialState = { ...DEFAULT_NEW_SPEC_WIZARD }

export function newSpecWizardReducer(state = initialState, action) {
  switch (action.type) {

    case NEW_SPEC_WIZARD_FILE_SET :
      return {
        ...state,
        spec: action.payload
      }

    default:
      return state
  }
}

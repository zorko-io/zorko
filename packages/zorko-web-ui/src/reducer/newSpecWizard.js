import { DEFAULT_NEW_SPEC_WIZARD,  } from '../state'
import {
  NEW_SPEC_WIZARD_CLEAR,
  NEW_SPEC_WIZARD_ERROR,
  NEW_SPEC_WIZARD_FILE_SET,
  NEW_SPEC_WIZARD_PUBLISH_SUCCESS
} from '../action'

const initialState = { ...DEFAULT_NEW_SPEC_WIZARD }

export function newSpecWizardReducer(state = initialState, action) {
  switch (action.type) {

    case NEW_SPEC_WIZARD_FILE_SET :
      return {
        ...state,
        spec: action.payload.spec,
        isEmptySpec: false,
        type: action.payload.type,
        isVegaLite: action.payload.type === 'VEGA_LITE',
        hasError: false
      }

    case NEW_SPEC_WIZARD_ERROR :
      return {
        ...state,
        error: action.payload.error,
        errorInfo: action.payload.errorInfo,
        hasError: true
      }

    case NEW_SPEC_WIZARD_PUBLISH_SUCCESS :
      return {
        ...state,
        publishedSpecId: action.payload.id,
      }

    case NEW_SPEC_WIZARD_CLEAR :
      return {
        ...initialState
      }

    default:
      return state
  }
}

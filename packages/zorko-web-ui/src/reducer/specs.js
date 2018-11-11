import { DEFAULT_SPECS_STATE } from '../state'
import { NEW_SPEC_WIZARD_PUBLISH_SUCCESS, SPEC_SET } from '../action'
import { modifySpec } from '../api'
const initialState = { ...DEFAULT_SPECS_STATE }

function addSpec(state, spec) {
  return {
    ...state,
    byId: {
      ...state.byId,
      [spec.id] : {
        ...spec,
      }
    }
  }
}

export default function specReducer(state = initialState, action) {
  switch (action.type) {
    case SPEC_SET :
      let specContent = action.payload
      return addSpec(state, {
        ...specContent,
        spec: modifySpec(specContent.spec, 'VEGA_LITE')
      })
    case NEW_SPEC_WIZARD_PUBLISH_SUCCESS :
      return addSpec(state, action.payload)
    default:
      return state
  }
}

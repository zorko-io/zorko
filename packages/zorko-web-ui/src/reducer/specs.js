import { DEFAULT_SPECS_STATE } from '../state'
import { NEW_SPEC_WIZARD_PUBLISH_SUCCESS, SPEC_SET } from '../action'
import { compile } from 'vega-lite';

const initialState = { ...DEFAULT_SPECS_STATE }

function modifyDataSourceLocation(spec) {
  if (spec.data && spec.data.url) {
    let url = spec.data.url

    spec.data.url = `https://raw.githubusercontent.com/vega/vega-datasets/gh-pages/${url}`
  }

  if (spec.layer && spec.layer.length > 0) {
    spec.layer = spec.layer.map(layer => {
      let result = { ...layer }
      if (layer.data && layer.data.url) {
        result.data.url = `https://raw.githubusercontent.com/vega/vega-datasets/gh-pages/${layer.data.url}`
      }
      return result
    })
  }
  return spec;
}

function addSpec(state, specContent) {
  // TODO: replace with server-side
  const spec = modifyDataSourceLocation(specContent.spec)
  return {
    ...state,
    byId: {
      ...state.byId,
      [specContent.id] : {
        ...specContent,
        spec: compile(spec).spec
      }
    }
  }
}


export default function specReducer(state = initialState, action) {
  switch (action.type) {
    case SPEC_SET :
      return addSpec(state, action.payload)
    case NEW_SPEC_WIZARD_PUBLISH_SUCCESS :
      return addSpec(state, action.payload)
    default:
      return state
  }
}

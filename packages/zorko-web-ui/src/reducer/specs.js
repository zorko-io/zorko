import { DEFAULT_SPECS_STATE } from '../state'
import { SPEC_SET } from '../action'
import { compile } from 'vega-lite';


const initialState = { ...DEFAULT_SPECS_STATE }

export default function specReducer(state = initialState, action) {
  switch (action.type) {

    case SPEC_SET :

      const payload = action.payload;
      let spec = payload.spec

      if (spec.data && spec.data.url){
        let url = spec.data.url

        spec.data.url = `https://raw.githubusercontent.com/vega/vega-datasets/gh-pages/${url}`;
      }

      return {
        ...state,
        byId: {
          ...state.byId,
          [payload.id] : compile(spec).spec
        }
      }

    default:
      return state
  }
}

import { DEFAULT_PREVIEWS_STATE } from '../state'
import { SPEC_LOOKUPS_SET } from '../action'
import { SPECS_PAGE_REQUEST } from '../action/home'

const initialState = { ...DEFAULT_PREVIEWS_STATE }

export default function previewReducer(state = initialState, action) {
  switch (action.type) {
    case SPECS_PAGE_REQUEST:
      const specId = action.payload
      let offset = 0
      const limit = 6

      if (specId) {
        let pageNumber = Number(specId)
        if (Number.isNaN(pageNumber)) {
          pageNumber = 0
        }
        offset = pageNumber * limit
      }

      return {
        ...state,
        limit,
        offset
      }
    case SPEC_LOOKUPS_SET:
      const previews = action.payload || []
      return {
        ...state,
        byId: previews.reduce(
          (memo, preview) => ({
            ...memo,
            [preview.id]: preview
          }),
          {}
        ),
        allIds: previews.map((preview) => preview.id)
      }
    default:
      return state
  }
}

import { DEFAULT_ERROR_STATE } from '../state'
import { ERROR_CLEAR, ERROR_RECOVERABLE_SET } from '../action'

const initialState = { ...DEFAULT_ERROR_STATE }

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case ERROR_RECOVERABLE_SET:
      return {
        level: 'recoverable',
        message: action.payload
      }

    case ERROR_CLEAR:
      return {
        ...initialState
      }

    default:
      return state
  }
}

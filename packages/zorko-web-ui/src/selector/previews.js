import { ROUNTE_SPECS_PAGGINATION, ROUNTE_HOME } from '../constant'

export const getAll = (state) => state.previews.allIds.map((id) => state.previews.byId[id])

export const getPageNumber = (state) => {
  const offset = state.previews.offset
  return Math.floor(offset / 6)
}

export const getPreviousUrl = (state) => {
  let result = ''
  let pageNumber = getPageNumber(state)
  pageNumber -= 1
  if (pageNumber === 0) {
    result = ROUNTE_HOME
  } else if (pageNumber > 0) {
    result = ROUNTE_SPECS_PAGGINATION.replace(':pageId', pageNumber)
  }
  return result
}

export const getNextUrl = (state) => {
  const pageNumber = getPageNumber(state) + 1
  return ROUNTE_SPECS_PAGGINATION.replace(':pageId', pageNumber)
}

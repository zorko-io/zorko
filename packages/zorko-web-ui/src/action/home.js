export const SPECS_PAGE_REQUEST = 'SPECS_PAGE_REQUEST'

export const specsPageRequest = (specsPageId) => ({
  type: SPECS_PAGE_REQUEST,
  payload: specsPageId
})

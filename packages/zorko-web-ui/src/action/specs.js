export const SPEC_LOOKUPS_REQUEST = 'SPEC_LOOKUPS_REQUEST'
export const SPEC_LOOKUPS_SET = 'SPEC_LOOKUPS_SET'
export const SPEC_LOOKUPS_ERROR = 'SPEC_LOOKUPS_ERROR'

export const specLookupsRequest = (options) => ({
  type: SPEC_LOOKUPS_REQUEST,
  payload: options
})

export const specLookupsSet = (lookups) => ({
  type: SPEC_LOOKUPS_SET,
  payload: lookups
})

export const specLookupsError = (error) => ({
  type: SPEC_LOOKUPS_ERROR,
  payload: error
})

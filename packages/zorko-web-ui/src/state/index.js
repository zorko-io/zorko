import { API_DEFAULT_PAGGINATION_OPTIONS } from '../constants'

export const DEFAULT_ERROR_STATE = {
  level: '',
  message: ''
}

export const DEFAULT_SPECS_STATE = {
  byId: {},
  allIds: []
}

export const DEFAULT_PREVIEWS_STATE = {
  byId: {},
  allIds: [],
  ...API_DEFAULT_PAGGINATION_OPTIONS
}

export const DEFAULT_AUTH = {
  token: '',
  shouldShowModal: false
}

export const DEFAULT_VIEWER = {
  selectedSpecId: null
}

export const DEFAULT_USER_PROFILE = {};

export const DEFAULT_NEW_SPEC_WIZARD = {
  spec: {
    $schema: "https://vega.github.io/schema/vega/v4.json"
  },
  isEmptySpec: true,
  type: 'VEGA',
  isVegaLite: false,
  hasError: true,
  publishedSpecId: ''
};

export const DEFAULT_APP_STATE = {
  specs: DEFAULT_SPECS_STATE,
  previews: DEFAULT_PREVIEWS_STATE,
  error: DEFAULT_ERROR_STATE,
  auth: DEFAULT_AUTH,
  userProfile: DEFAULT_USER_PROFILE,
  viewer: DEFAULT_VIEWER,
  newSpecWizard: DEFAULT_NEW_SPEC_WIZARD
}

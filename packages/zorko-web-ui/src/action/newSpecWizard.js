export const NEW_SPEC_WIZARD_FILE_SET = 'NEW_SPEC_WIZARD_FILE_SET'
export const NEW_SPEC_WIZARD_CLEAR = 'NEW_SPEC_WIZARD_CLEAR'
export const NEW_SPEC_WIZARD_ERROR = 'NEW_SPEC_WIZARD_ERROR'

export const NEW_SPEC_WIZARD_PUBLISH_REQUEST = 'NEW_SPEC_WIZARD_PUBLISH_REQUEST'
export const NEW_SPEC_WIZARD_PUBLISH_SUCCESS = 'NEW_SPEC_WIZARD_PUBLISH_SUCCESS'
export const NEW_SPEC_WIZARD_PUBLISH_ERROR = 'NEW_SPEC_WIZARD_PUBLISH_ERROR'

export const newSpecWizardFileSet = ({spec, type}) => ({
  type: NEW_SPEC_WIZARD_FILE_SET,
  payload: {
    spec,
    type
  }
})

export const newSpecWizardClear = () => ({
  type: NEW_SPEC_WIZARD_CLEAR
})

export const newSpecWizardError = (error) => ({
  type: NEW_SPEC_WIZARD_ERROR,
  payload: error
})

export const newSpecWizardPublishRequest = ({spec, type, author, title}) => ({
  type: NEW_SPEC_WIZARD_PUBLISH_REQUEST,
  payload: {
    spec,
    type,
    author,
    title
  }
})

export const newSpecWizardPublishSuccess = (spec) => ({
  type: NEW_SPEC_WIZARD_PUBLISH_SUCCESS,
  payload: spec
})

export const newSpecWizardPublishError = (error) => ({
  type: NEW_SPEC_WIZARD_PUBLISH_ERROR,
  payload: {
    error
  }
})



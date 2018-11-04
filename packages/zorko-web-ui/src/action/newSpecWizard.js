export const NEW_SPEC_WIZARD_FILE_SET = 'NEW_SPEC_WIZARD_FILE_SET'
export const NEW_SPEC_WIZARD_CLEAR = 'NEW_SPEC_WIZARD_CLEAR'
export const NEW_SPEC_WIZARD_ERROR = 'NEW_SPEC_WIZARD_ERROR'

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

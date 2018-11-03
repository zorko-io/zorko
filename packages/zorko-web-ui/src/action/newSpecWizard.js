export const NEW_SPEC_WIZARD_FILE_SET = 'NEW_SPEC_WIZARD_FILE_SET'
export const NEW_SPEC_WIZARD_CLEAR = 'NEW_SPEC_WIZARD_CLEAR'

export const newSpecWizardFileSet = (spec) => ({
  type: NEW_SPEC_WIZARD_FILE_SET,
  payload: spec
})

export const newSpecWizardClear = () => ({
  type: NEW_SPEC_WIZARD_CLEAR
})

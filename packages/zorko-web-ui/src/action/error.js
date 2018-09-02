export const ERROR_RECOVERABLE_SET = 'ERROR_RECOVERABLE_SET'
export const ERROR_CLEAR = 'ERROR_CLEAR'

export const errorRecoverableSet = (message) => ({
  type: ERROR_RECOVERABLE_SET,
  payload: message
})

export const errorClear = () => ({
  type: ERROR_CLEAR
})

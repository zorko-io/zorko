export const BOOTSTRAP_START = 'BOOTSTRAP_START';

export const bootstrapStart = (configs) => ({
  type: BOOTSTRAP_START,
  payload: configs
})

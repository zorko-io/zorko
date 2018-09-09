export const BOOTSTRAP_START = 'BOOTSTRAP_START';
export const BOOTSTRAP_DONE = 'BOOTSTRAP_DONE';

export const bootstrapStart = (configs) => ({
  type: BOOTSTRAP_START,
  payload: configs
});

export const bootstrapDone = () => ({
  type: BOOTSTRAP_DONE
});

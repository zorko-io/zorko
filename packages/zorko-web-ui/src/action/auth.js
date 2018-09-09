export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_TOKEN_SET = 'AUTH_TOKEN_SET';
export const AUTH_PROFILE_REQUEST = 'AUTH_PROFILE_REQUEST';
export const AUTH_PROFILE_SET = 'AUTH_PROFILE_SET';
export const AUTH_PROFILE_SET_ERROR = 'AUTH_PROFILE_SET_ERROR';

export const authLogin = () => ({
  type: AUTH_LOGIN
});

export const authTokenSet = (token) => ({
  type: AUTH_TOKEN_SET,
  payload: token
});

export const authProfileRequest = () => ({
  type: AUTH_PROFILE_REQUEST
});

export const authProfileSet = (profile) => ({
  type: AUTH_PROFILE_SET,
  payload: profile
});

export const authProfileSetError = (error) => ({
  type: AUTH_PROFILE_SET_ERROR,
  payload: error
});



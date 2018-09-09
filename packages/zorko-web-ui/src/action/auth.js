export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_TOKEN_SET = 'AUTH_TOKEN_SET';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authLogin = () => ({
  type: AUTH_LOGIN
});

export const authLogout = () => ({
  type: AUTH_LOGOUT
});

export const authTokenSet = (token) => ({
  type: AUTH_TOKEN_SET,
  payload: token
});

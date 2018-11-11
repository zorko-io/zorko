export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_TOKEN_SET = 'AUTH_TOKEN_SET';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_MODAL_SHOW = 'AUTH_MODAL_SHOW';
export const AUTH_MODAL_HIDE = 'AUTH_MODAL_HIDE';

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


export const authModalShow = () => ({
  type: AUTH_MODAL_SHOW
});

export const authModalHide = () => ({
  type: AUTH_MODAL_HIDE
});



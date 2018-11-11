export const USER_PROFILE_SET = 'USER_PROFILE_SET';
export const USER_PROFILE_SET_ERROR = 'USER_PROFILE_SET_ERROR';

export const userProfileSet = (profile) => ({
  type: USER_PROFILE_SET,
  payload: profile
});

export const userProfileSetError = (error) => ({
  type: USER_PROFILE_SET_ERROR,
  payload: {
    error
  }
});



export const loginSuccess = (user: any) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const setUserData = (user: any) => ({
  type: "SET_USER_DATA",
  payload: user,
});
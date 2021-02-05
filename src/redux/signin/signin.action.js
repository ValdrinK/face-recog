export const signinEmail = event => ({
  type: "SIGNIN_INPUT_EMAIL",
  payload: event.target.value
});

export const signinPassword = event => ({
  type: "SIGNIN_INPUT_PASSWORD",
  payload: event.target.value
});

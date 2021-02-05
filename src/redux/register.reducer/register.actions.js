export const registerName = event => ({
  type: "REGISTER_NAME",
  payload: event.target.value
});

export const registerEmail = event => ({
  type: "REGISTER_EMAIL",
  payload: event.target.value
});

export const registerPassword = event => ({
  type: "REGISTER_PASSWORD",
  payload: event.target.value
});

export const getUser = user => ({
  type: "GET_USER",
  payload: user
});

export const getEntries = entries => ({
  type: "IMG_COUNTER",
  payload: entries
});

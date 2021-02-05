export const imagelink = input => ({
  type: "IMG_LINK",
  payload: input.target.value
});

export const imagelinktwo = () => ({
  type: "IMG_LINK_TWO"
});

export const facebox = data => ({
  type: "FACE_BOX",
  payload: data
});

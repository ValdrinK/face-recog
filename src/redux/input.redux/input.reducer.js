const INITIAL_STATE = {
  link: "",
  linkShow: "",
  box: {}
};

const imgLinkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "IMG_LINK":
      return {
        ...state,
        link: action.payload
      };

    case "IMG_LINK_TWO":
      return {
        ...state,
        linkShow: state.link
      };

    case "FACE_BOX":
      return {
        ...state,
        box: action.payload
      };

    default:
      return state;
  }
};

export default imgLinkReducer;

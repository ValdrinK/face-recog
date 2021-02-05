import React from "react";
import "./input.styles.scss";
import { connect } from "react-redux";
import {
  imagelink,
  imagelinktwo,
  facebox
} from "../../redux/input.redux/input.redux.action";
import { getEntries } from "../../redux/user/user.action";

import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "d8cb5fa08b714104b6ae8690f32c7357"
});

const ImageLinkForm = ({
  inputState,
  inputTarget,
  inputTargetTwo,
  inputStateTwo,
  facebox,
  UserId,
  getEntries
}) => {
  const calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height, clarifaiFace);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  const displayFaceBox = data => {
    console.log(data);
    facebox(data);
  };
  const onButtonSubmit = () => {
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, inputState)

      .then(response => {
        if (response) {
          fetch("http://localhost:3000/image", {
            method: "put",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              id: UserId
            })
          })
            .then(response => response.json())
            .then(count => {
              getEntries(count);
            });
        }
        displayFaceBox(calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="link">
      <div className="p-text">
        <p>This brain will find at least one face per picture , try it...</p>
      </div>

      <div className="input">
        <div className="center">
          <input
            onChange={inputTarget}
            className="input-bar"
            value={inputState}
            type="text"
            placeholder="image-link"
          />
          <button
            onClick={() => {
              onButtonSubmit();
              inputTargetTwo();
            }}
            className="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

// const mapDispatchToProps = dispatch => {
//   return {
//     inputTarget: evt => {
//       console.log("changed", evt.target.value);
//       const action = { type: "IMG_LINK", payload: evt.target.value };
//       dispatch(action);
//     }
//   };
// };

const mapDispatchToProps = dispatch => ({
  inputTarget: input => dispatch(imagelink(input)),
  inputTargetTwo: () => dispatch(imagelinktwo()),
  facebox: data => dispatch(facebox(data)),
  getEntries: entries => dispatch(getEntries(entries))
});

const mapStateToProps = state => ({
  inputState: state.img.link,
  inputStateTwo: state.img.linkShow,
  UserId: state.user.user.id
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageLinkForm);

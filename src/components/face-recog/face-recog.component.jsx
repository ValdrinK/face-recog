import React from "react";
import "./face-recog.styles.scss";
import { connect } from "react-redux";

const FaceRecognition = ({ inputState, inputStateTwo, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          alt=""
          src={inputStateTwo}
          width="500px"
          heigh="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        ></div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  inputState: state.img.link,
  inputStateTwo: state.img.linkShow,
  box: state.img.box
});

export default connect(mapStateToProps)(FaceRecognition);

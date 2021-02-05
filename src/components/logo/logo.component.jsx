import React from "react";
import "./logo.styles.scss";
import Tilt from "react-tilt";
import brain from "./brain.png.png";

const Logo = () => {
  return (
    <div className="logo">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 170, width: 170 }}
      >
        <div className="Tilt-inner">
          {" "}
          <img
            alt="logo"
            style={{ marginLeft: "30px", marginTop: "30px" }}
            src={brain}
          ></img>{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

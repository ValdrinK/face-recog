import React from "react";
import Navigation from "./components/navigation/navigation.component";
import ImageLinkForm from "./components/input/input.component";
import "./App.css";
import Logo from "./components/logo/logo.component";
import Rank from "./components/rank/rank.component";
import Particles from "react-particles-js";
import FaceRecognition from "./components/face-recog/face-recog.component";
import SignIn from "./components/signin/signin.component";
import Register from "./components/register/register.component";
import { connect } from "react-redux";

const App = ({ route }) => {
  return (
    <div className='App'>
      <Particles
        className='particles'
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 220
              }
            }
          }
        }}
      />
      <Navigation />
      {route === "home" ? (
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm />

          <FaceRecognition />
        </div>
      ) : route === "signin" ? (
        <SignIn />
      ) : (
        <Register />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  route: state.route.route
});

export default connect(mapStateToProps)(App);

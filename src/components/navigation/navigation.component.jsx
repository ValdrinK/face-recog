import React from "react";
import "./navigation.styles.scss";
import { connect } from "react-redux";
import { goToSignin, goToRegister } from "../../redux/route.state/route.action";

const Navigation = ({ goToSignin, route, goToRegister }) => {
  if (route === "home") {
    return (
      <div className="navigation">
        <p onClick={goToSignin}>Sign Out</p>
      </div>
    );
  } else if (route === "signin") {
    return (
      <div className="navigation">
        <p onClick={() => goToRegister()}>Register</p>
      </div>
    );
  } else {
    return (
      <div className="navigation">
        <p onClick={() => goToSignin()}>Sign In</p>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  route: state.route.route
});

const mapDispatchToProps = dispatch => ({
  goToSignin: () => dispatch(goToSignin()),
  goToRegister: () => dispatch(goToRegister())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

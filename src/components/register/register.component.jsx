import React from "react";
import { connect } from "react-redux";
import { goToHome } from "../../redux/route.state/route.action";
import {
  registerName,
  registerEmail,
  registerPassword
} from "../../redux/register.reducer/register.actions";
import { getUser } from "../../redux/user/user.action";

const Register = ({
  goHome,
  rName,
  rEmail,
  rPassword,
  name,
  email,
  password,
  getUser
}) => {
  const onSubmitRegister = () => {
    console.log("submit");
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          getUser(data);
          goHome();
        }
      });
  };
  return (
    <article className="br3 ba  b--black-10 mv4 w-100 shadow-5 w-50-m w-25-l mw6 center">
      <main className="pa4 black-80 center">
        <div className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 center">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlfor="name">
                Name
              </label>
              <input
                onChange={rName}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
              <label className="db fw6 lh-copy f6" htmlfor="email-address">
                Email
              </label>
              <input
                onChange={rEmail}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlfor="password">
                Password
              </label>
              <input
                onChange={rPassword}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer"></label>
          </fieldset>
          <div className="">
            <input
              onClick={() => onSubmitRegister()}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center"
              type="submit"
              value="Register"
            />
          </div>
          <div className="lh-copy mt3 center"></div>
        </div>
      </main>
    </article>
  );
};

const mapDispatchToProps = dispatch => ({
  rName: event => dispatch(registerName(event)),
  rEmail: event => dispatch(registerEmail(event)),
  rPassword: event => dispatch(registerPassword(event)),
  goHome: () => dispatch(goToHome()),
  getUser: user => dispatch(getUser(user))
});

const mapStateToProps = state => ({
  name: state.register.name,
  email: state.register.email,
  password: state.register.password
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

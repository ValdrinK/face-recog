import React from "react";
import "./signin.styles.scss";
import { connect } from "react-redux";
import { goToHome, goToRegister } from "../../redux/route.state/route.action";
import { signinEmail, signinPassword } from "../../redux/signin/signin.action";
import { getUser } from "../../redux/user/user.action";

const SignIn = ({
  goHome,
  goToRegister,
  email,
  password,
  emailValue,
  passwordValue,
  getUser
}) => {
  const onSubmbitFunction = () => {
    console.log("submit working");
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          getUser(user);
          goHome();
        }
      });
  };

  return (
    <article className='br3 ba  b--black-10 mv4 w-100 shadow-5 w-50-m w-25-l mw6 center'>
      <main className='pa4 black-80 center'>
        <div className='measure '>
          <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
            <legend className='f2 fw6 ph0 mh0 center'>Sign In</legend>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' htmlfor='email-address'>
                Email
              </label>
              <input
                onChange={email}
                className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='email'
                name='email-address'
                id='email-address'
              />
            </div>
            <div className='mv3'>
              <label className='db fw6 lh-copy f6' htmlfor='password'>
                Password
              </label>
              <input
                onChange={password}
                className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='password'
                name='password'
                id='password'
              />
            </div>
            <label className='pa0 ma0 lh-copy f6 pointer'></label>
          </fieldset>
          <div className=''>
            <input
              onClick={() => onSubmbitFunction()}
              className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center'
              type='submit'
              value='Sign in'
            />
          </div>
          <div className='lh-copy mt3 center'>
            <a
              href='#0'
              onClick={() => goToRegister()}
              className='f6 link dim black db pointer'
            >
              Register
            </a>
          </div>
        </div>
      </main>
    </article>
  );
};

const mapDispatchToProps = dispatch => ({
  password: event => dispatch(signinPassword(event)),
  email: event => dispatch(signinEmail(event)),
  goHome: () => dispatch(goToHome()),
  goToRegister: () => dispatch(goToRegister()),
  getUser: user => dispatch(getUser(user))
});

const mapStateToProps = state => ({
  emailValue: state.signIn.email,
  passwordValue: state.signIn.password
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

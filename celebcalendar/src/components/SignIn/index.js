import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Redirect } from 'react-router-dom';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import { PasswordForgetForm} from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';


const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
 }
 //State is Set to false. We then set 'setRedirect' as true. When state is 'true' the page is redirected to / which is home. 
  
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    this.state={
      authorized: false
    }
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.setState({
          authorized: true
        })
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    const login = (
      <form onSubmit={this.onSubmit} class="AuthBackGround">
        <div class="forms">
          <h1 className="SigninTitle">Sign In</h1>
        <input class="SignInInPut"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input class="SignInInPut"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
       
        <button disabled={isInvalid} type="submit" class="SignInCon">
          Sign In
          
        </button>

        {error && <p>{error.message}</p>}
        <div className="SignInLinks">
        <SignUpLink />
        <PasswordForgetLink />
        </div>
        </div>
      </form>
    );

    const loggedin = (
      <div>
      <h1>Admin/signin</h1>
    {this.renderRedirect()}
    <button type="button" onClick={this.setRedirect} >
        Sign Out
    </button>
    {/* The button here has an onClick that sets the state to true and then performs the page chang*/}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      {/* 
      
      
       Add Content here
      
      
      */}

      <div class="">
        <h2> Password Reset</h2>
        <p> Change your password with either option bellow, reset by email or here and now.</p>
            <PasswordForgetForm className="PassForm" />
            <PasswordChangeForm className="PassForm"/>
      </div>
      






     </div>
    );

    return (
      <div>
        {this.state.authorized? loggedin: login }
      </div>
    );
  }
}
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
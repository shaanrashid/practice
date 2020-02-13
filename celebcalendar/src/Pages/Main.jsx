import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import PracticePage from './Calendar';
import Test from './Test';
import SignIn from '../components/SignIn/index';
import SignUp from '../components/SignUp/index';
import PasswordForgetPage from '../components/PasswordForget';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/Calendar2' component={PracticePage} />
      <Route path='/SignIn' component={SignIn} />
      <Route path='/Test' component={Test} />
      <Route path='/SignUp' component = {SignUp} />
      <Route path='/pw-forget' component = {PasswordForgetPage} />
    </Switch>
  </main>
)
//Defining the routs for the navigation bar.

export default Main;
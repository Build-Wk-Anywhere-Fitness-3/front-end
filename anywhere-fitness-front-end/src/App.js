import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './Components/AAAReusable/Header';
import Logo from './Components/BBBFrontPage/Logo';
import SignUpForm from './Components/BBBFrontPage/SignUpForm';
import Overview from './Components/BBBFrontPage/Overview';
import LoginForm from './Components/BBBFrontPage/LogInForm';
import Footer from './Components/AAAReusable/Footer';

import ClientDash from './Components/CCCSecondaryPages/Dashboard/ClientDash';
import InstructorDash from './Components/CCCSecondaryPages/Dashboard/InstructorDash';

function App() {
  return (
    <div>
        <Header />
          <div className="App">
            {/* <Logo /> */}
              <Route exact path="/" component={Logo} component={SignUpForm} />
              <Route exact path="/login" component={LoginForm} />
              {/* <Route path="/" component={LoginForm} /> */}

              
              {/* <Route exact path="/" components={{logo: Logo, signUpForm: SignUpForm}} />
              <Route path="/login" components={{logo: Logo, loginForm: LoginForm}} /> */}
              <Route path="client-dash" component={ClientDash} />
              <Route path="instructor-dash" component={InstructorDash} />
          </div>
        <Footer />
    </div>
  );
}

export default App;

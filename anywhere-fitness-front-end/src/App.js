import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import Header from './Components/AAAReusable/Header';
import Logo from './Components/BBBFrontPage/Logo';
import SignUpForm from './Components/BBBFrontPage/SignUpForm';
import Footer from './Components/AAAReusable/Footer';

import ClientDash from './Components/CCCSecondaryPages/Dashboard/ClientDash';
import InstructorDash from './Components/CCCSecondaryPages/Dashboard/InstructorDash';

function App() {
  return (
    <div>
        <Header />
          <div className="App">
            <Route exact path="/" components={{logo: Logo, signUpForm: SignUpForm}} />
            <Route path="client-dash" component={ClientDash} />
            <Route path="instructor-dash" component={InstructorDash} />
            <Logo />
            <SignUpForm />
            <Footer />
          </div>
        <Footer />
    </div>
  );
}

export default App;

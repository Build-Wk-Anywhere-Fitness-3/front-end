import React from "react";
import "./App.css";


import { BroswerRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Components/AAAReusable/Header';
import Logo from './Components/BBBFrontPage/Logo';
import SignUpForm from './Components/BBBFrontPage/SignUpForm';
import Overview from './Components/BBBFrontPage/Overview';
import LoginForm from './Components/BBBFrontPage/LogInForm';
import Footer from './Components/AAAReusable/Footer';


import ClientDash from "./Components/CCCSecondaryPages/Dashboard/ClientDash";
import InstructorDash from "./Components/CCCSecondaryPages/Dashboard/InstructorDash";
import ClientClassList from "./Components/SamsComponents/ClientClassList";
import InstructorClassList from "./Components/SamsComponents/InstructorClassList";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <div className="App">
    <Route exact path="/"> 
    <Logo/>
    <SignUpForm/>
    </Route>
              <Route exact path="/login" component={LoginForm} />

          <Logo />
          
          <Footer />
          <ClientClassList />
          <InstructorClassList />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

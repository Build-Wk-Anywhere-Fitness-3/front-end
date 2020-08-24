import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Components/AAAReusable/Header";
import Logo from "./Components/BBBFrontPage/Logo";
import SignInForm from "./Components/BBBFrontPage/SignInForm";
import Footer from "./Components/AAAReusable/Footer";

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
          <Route
            exact
            path="/"
            components={{ logo: Logo, signInForm: SignInForm }}
          />
          <Route path="client-dash" component={ClientDash} />
          <Route path="instructor-dash" component={InstructorDash} />
          <Logo />
          <SignInForm />
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

import React from 'react';
import './App.css';
import Header from './Components/AAAReusable/Header';
import Logo from './Components/BBBFrontPage/Logo';
import SignInForm from './Components/BBBFrontPage/SignInForm';
import Footer from './Components/AAAReusable/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {/* <Logo />
        <SignInForm />
        <Footer /> */}
      </header>
    </div>
  );
}

export default App;

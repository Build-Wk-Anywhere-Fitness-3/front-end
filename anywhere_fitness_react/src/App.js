import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ClientPrivateRoute from "./components/ClientPrivateRoute";
import ClassForm from "./components/ClassForm";

function App() {
  return (
    <Router>
      {" "}
      <div className="App"></div>
      <ClientPrivateRoute path="/protected" />
      <ClassForm />
    </Router>
  );
}

export default App;

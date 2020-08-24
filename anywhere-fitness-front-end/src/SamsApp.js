import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ClientPrivateRoute from "./Components/Sam's Components/ClientPrivateRoute";
import ClassForm from "./Components/Sam's Components/ClassForm";

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

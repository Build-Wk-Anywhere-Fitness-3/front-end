import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ClientPrivateRoute from "./Components/SamsComponents/ClientPrivateRoute";
import ClassForm from "./Components/SamsComponents/AddClassForm";

function App() {
  return (
    <Router>
      {" "}
      <div className="App"></div>
      <ClientPrivateRoute exact path="/protected" />
      <ClassForm />
    </Router>
  );
}

export default App;

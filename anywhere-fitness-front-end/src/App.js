import React, { useState, createContext } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/AAAReusable/Header";
import Logo from "./Components/BBBFrontPage/Logo";
import SignUpForm from "./Components/BBBFrontPage/SignUpForm";
import Overview from "./Components/BBBFrontPage/Overview";
import LoginForm from "./Components/BBBFrontPage/LogInForm";
import Footer from "./Components/AAAReusable/Footer";

import ClientClassList from "./Components/SamsComponents/ClientClassList";
import InstructorClassList from "./Components/SamsComponents/InstructorClassList";
import PrivateRoute from "./Components/SamsComponents/PrivateRoute";
import AddClassForm from "./Components/SamsComponents/AddClassForm";
import UpdateClassForm from "./Components/SamsComponents/UpdateClassForm";

// const dummyData = [
//   {
//     name: "Boxing Fundamentals",
//     type: "Boxing",
//     instructor_name: "Sam",
//     date: "8/24",
//     duration: "1 hour",
//     intensity: "Challenging",
//     location: "Remote",
//     signedUp: "57",
//     max_size: "N/A",
//   },
//   {
//     name: "Cycling Intervals",
//     type: "Cycling",
//     instructor_name: "Sam",
//     date: "8/24",
//     duration: "1 hour",
//     intensity: "Challenging",
//     location: "Spin City",
//     signedUp: "57",
//     max_size: "100",
//   },
// ];
export const initialValues = {
  name: "",
  instructor_name: localStorage.getItem("username"),
  type: "",
  date: "",
  duration: "",
  intensity: "low",
  location: "",
  signedUp: "",
  max_size: "",
};

export const ClassContext = createContext();
function App() {
  const [clientClassList, setClientClassList] = useState([]);
  const [inputs, setInputs] = useState(initialValues);

  return (
    <div>
      <Router>
        <ClassContext.Provider
          value={{ clientClassList, setClientClassList, inputs, setInputs }}
        >
          <Header />
          <div className="App">
            <Logo />
            <Route exact path="/">
              <SignUpForm />
            </Route>
            <Route exact path="/login" component={LoginForm} />

            <PrivateRoute path="/instructor" component={InstructorClassList} />
            <Route path="/add-class" component={AddClassForm} />
            <Route path="/update-class/:id" component={UpdateClassForm} />

            <PrivateRoute path="/client" component={ClientClassList} />
          </div>
          <Footer />
        </ClassContext.Provider>
      </Router>
    </div>
  );
}

export default App;

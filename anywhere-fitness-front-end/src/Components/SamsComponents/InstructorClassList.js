import React, { useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory, Route } from "react-router-dom";
import { ClassListStyle } from "../../styled-components/";

import AddClassForm from "./AddClassForm";
import UpdateClassForm from "./UpdateClassForm";

const dummyData = [
  {
    name: "Boxing Fundamentals",
    type: "Boxing",
    instructor: "Sam",
    startTime: "10:30am",
    duration: "1 hour",
    intensity: "Challenging",
    location: "Remote",
    current: "57",
    maximum: "N/A",
  },
  {
    name: "Cycling Intervals",
    type: "Cycling",
    instructor: "Sam",
    startTime: "2:30pm",
    duration: "1 hour",
    intensity: "Challenging",
    location: "Spin City",
    current: "57",
    maximum: "100",
  },
];

const initialValues = {
  name: "",
  instructor: "",
  type: "",
  startTime: "",
  duration: "",
  intensity: "",
  location: "",
  current: "",
  maximum: "",
};

export default function InstructorClassList() {
  const [instructorClasses, setInstructorClasses] = useState(dummyData);
  const [inputs, setInputs] = useState(initialValues);

  const history = useHistory();

  return (
    <>
      Your current classes:
      <ClassListStyle>
        {instructorClasses.map((cls) => {
          return (
            <div>
              <h1>Name: {cls.name}</h1>
              <h3>Type of class: {cls.type}</h3>
              <h3>Instructor: {cls.instructor}</h3>
              <p>Start Time: {cls.startTime}</p>
              <p>Intensity: {cls.intensity}</p>
              <p>Location: {cls.location}</p>
              <p>Current number of registered attendees: {cls.current}</p>
              <p>Maximum class size: {cls.maximum}</p>
              <button>Edit Class</button>
              <button>Delete Class</button>
            </div>
          );
        })}
      </ClassListStyle>
      <button onClick={() => history.push("/add-class")}>
        Make a new class
      </button>
      <Route path="/add-class">
        <AddClassForm inputs={inputs} setInputs={setInputs} />
      </Route>
      <Route path="/update-class/:id">
        <UpdateClassForm inputs={inputs} setInputs={setInputs} />
      </Route>
    </>
  );
}

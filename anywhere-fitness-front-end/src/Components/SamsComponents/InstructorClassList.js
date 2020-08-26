import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory, Route, Link } from "react-router-dom";
import { ClassListStyle } from "../../styled-components/";

import AddClassForm from "./AddClassForm";
import UpdateClassForm from "./UpdateClassForm";
import ClassCard from "./ClassCard";
import Classs from "./Classs";

const dummyData = [
  {
    id: 1,
    name: "Boxing Fundamentals",
    type: "Boxing",
    instructor_name: "Sam",
    date: "8/24",
    duration: "1 hour",
    intensity: "Challenging",
    location: "Remote",
    signedUp: "57",
    max_size: "N/A",
  },
  {
    id: 2,
    name: "Cycling Intervals",
    type: "Cycling",
    instructor_name: "Sam",
    date: "8/24",
    duration: "1 hour",
    intensity: "Challenging",
    location: "Spin City",
    signedUp: "57",
    max_size: "100",
  },
];

const initialValues = {
  name: "",
  instructor_name: "",
  type: "",
  date: "",
  duration: "",
  intensity: "",
  location: "",
  signedUp: "",
  max_size: "",
};

export default function InstructorClassList() {
  const [instructorClasses, setInstructorClasses] = useState(dummyData);
  const [inputs, setInputs] = useState(initialValues);

  const history = useHistory();

  const getInstructorClasses = () => {
    axiosWithAuth()
      .get("/api/auth/instructor/classes/")
      .then((res) => {
        console.log(res);
      });
  };
  useEffect(() => {
    getInstructorClasses();
  }, []);

  return (
    <>
      Your current classes:
      <ClassListStyle>
        {instructorClasses.map((cls) => {
          return (
            <div>
              <Link key={cls.id} to={`api/auth/instructor/classes/${cls.id}`}>
                <ClassCard cls={cls} />
              </Link>
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
      <Route path="/api/auth/instructor/classes/:id">
        <Classs
          instructorClasses={instructorClasses}
          setInstructorClasses={setInstructorClasses}
        />
      </Route>
    </>
  );
}

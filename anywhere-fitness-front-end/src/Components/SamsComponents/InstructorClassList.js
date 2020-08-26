import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory, Route, Link } from "react-router-dom";
import { ClassListStyle } from "../../styled-components/";

import AddClassForm from "./AddClassForm";
import UpdateClassForm from "./UpdateClassForm";
import ClassCard from "./ClassCard";
import { ClassContext } from "../../App";

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

export default function InstructorClassList() {
  const [instructorClasses, setInstructorClasses] = useState([]);
  const { inputs } = useContext(ClassContext);

  const history = useHistory();

  //   const getInstructorClasses = () => {
  //     axiosWithAuth()
  //       .get("/api/auth/users/classes/instructor")
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   };
  const getClassList = () => {
    axiosWithAuth()
      .get("/api/auth/users/classes")
      .then((res) => {
        const x = res.data.data.filter(
          (cls) => cls.instructor_name === inputs.instructor_name
        );
        console.log(res);
        console.log(inputs.instructor_name);
        console.log(x);
        setInstructorClasses(x);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getClassList();
  }, [instructorClasses.length]);

  return (
    <>
      Your current classes:
      <ClassListStyle>
        {instructorClasses.map((cls) => {
          return (
            <div key={cls.id}>
              <ClassCard
                setInstructorClasses={setInstructorClasses}
                instructorClasses={instructorClasses}
                cls={cls}
              />
            </div>
          );
        })}
      </ClassListStyle>
      <button onClick={() => history.push("/add-class")}>
        Make a new class
      </button>
    </>
  );
}

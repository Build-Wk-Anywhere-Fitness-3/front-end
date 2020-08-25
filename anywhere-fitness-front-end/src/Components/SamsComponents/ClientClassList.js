import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import { ClassListStyle } from "../../styled-components/";

const ClassContext = createContext();

const dummyData = [
  {
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

export default function ClassList() {
  const [clientClassList, setClientClassList] = useState(dummyData);

  const getClassList = () => {
    axiosWithAuth()
      .get("/api/auth/users/classes")
      .then((res) => {
        console.log(res);
        //   setClientClassList(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   getClassList();
  // }, []);
  return (
    <ClassContext.Provider value={clientClassList}>
      <ClassListStyle className="classList">
        {clientClassList.map((cls) => {
          return (
            <div>
              <h1>Name: {cls.name}</h1>
              <h3>Type of class: {cls.type}</h3>
              <h3>Instructor: {cls.instructor_name}</h3>
              <p>Start Time: {cls.date}</p>
              <p>Intensity: {cls.intensity}</p>
              <p>Location: {cls.location}</p>
              <p>Current number of registered attendees: {cls.signedUp}</p>
              <p>Maximum class size: {cls.max_size}</p>
            </div>
          );
        })}
      </ClassListStyle>
    </ClassContext.Provider>
  );
}

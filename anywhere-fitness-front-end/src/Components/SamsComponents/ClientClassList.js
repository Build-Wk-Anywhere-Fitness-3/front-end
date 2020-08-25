import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import { ClassListStyle } from "../../styled-components/";

const ClassContext = createContext();

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
              <h3>Instructor: {cls.instructor}</h3>
              <p>Start Time: {cls.startTime}</p>
              <p>Intensity: {cls.intensity}</p>
              <p>Location: {cls.location}</p>
              <p>Current number of registered attendees: {cls.current}</p>
              <p>Maximum class size: {cls.maximum}</p>
            </div>
          );
        })}
      </ClassListStyle>
    </ClassContext.Provider>
  );
}

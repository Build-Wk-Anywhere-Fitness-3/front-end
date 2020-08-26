import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { ClassContext } from "../../App";
import { ClassListStyle } from "../../styled-components/";
import SearchForm from "./SearchForm";

export default function ClassList() {
  const { clientClassList, setClientClassList } = useContext(ClassContext);
  const getClassList = () => {
    axiosWithAuth()
      .get("/api/auth/users/classes")
      .then((res) => {
        console.log(res);
        setClientClassList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getClassList();
  }, []);
  return (
    <div>
      <SearchForm
        clientClassList={clientClassList}
        setClientClassList={setClientClassList}
        getClassList={getClassList}
      />
      <ClassListStyle className="classList">
        {clientClassList.map((cls) => {
          return (
            <div>
              <h1>Name: {cls.name}</h1>
              <h3>Type of class: {cls.type}</h3>
              <h3>Instructor: {cls.instructor_name}</h3>
              <p>Date: {cls.date}</p>
              <p>Intensity: {cls.intensity}</p>
              <p>Location: {cls.location}</p>
              <p>Current number of registered attendees: {cls.signedUp}</p>
              <p>Maximum class size: {cls.max_size}</p>
            </div>
          );
        })}
      </ClassListStyle>
    </div>
  );
}

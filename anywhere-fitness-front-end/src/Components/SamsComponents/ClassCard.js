import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

export default function ClassCard({ cls }) {
  const history = useHistory();

  const deleteClass = (e) => {
    e.preventDefault();
    console.log(cls.id);
    axiosWithAuth()
      .delete(`/api/auth/instructor/classes/${cls.id}`)
      .then((res) => {
        console.log("Deleted", res);
      });
  };
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
      <button onClick={() => history.push(`/update-class/${cls.id}`)}>
        Edit Class
      </button>
      <button onClick={deleteClass}>Delete Class</button>
    </div>
  );
}

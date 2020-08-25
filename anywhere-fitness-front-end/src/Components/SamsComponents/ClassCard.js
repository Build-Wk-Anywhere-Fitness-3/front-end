import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export default function ClassCard({ cls }) {
  const fetchClass = () => {};
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
      <button>Edit Class</button>
      <button>Delete Class</button>
    </div>
  );
}

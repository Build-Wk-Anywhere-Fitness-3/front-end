import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
const initialValues = {
  name: "",
  type: "",
  startTime: "",
  duration: "",
  intensity: "",
  location: "",
  current: "",
  maximum: "",
};
export default function ClassForm() {
  const [inputs, setInputs] = useState(initialValues);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const postNewClass = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("", inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateClass = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put("", inputs)
      .then((res) => {});
  };

  return (
    <div>
      <form onSubmit={postNewClass}>
        <label>
          Name of Class:
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={inputs.type}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Start time:
          <input
            type="text"
            name="startTime"
            value={inputs.startTime}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Duration:
          <input
            type="text"
            name="duration"
            value={inputs.duration}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Intensity:
          <select name="intensity" value={inputs.intensity}>
            <option value="beginner">Beginner</option>
            <option value="moderate">Moderate</option>
            <option value="challenging">Challenging</option>
            <option value="extreme">Extreme</option>
          </select>
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={inputs.location}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Current number of registered attendees:
          <input
            type="text"
            name="current"
            value={inputs.current}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Maximum class size:
          <input
            type="text"
            name="maximum"
            value={inputs.maximum}
            onChange={handleChange}
          />
        </label>
        <br />

        <button>Add Class</button>
      </form>
    </div>
  );
}

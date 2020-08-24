import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
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

export default function AddClassForm() {
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
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      Add a new class:
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
            <option value="Beginner">Beginner</option>
            <option value="Moderate">Moderate</option>
            <option value="Challenging">Challenging</option>
            <option value="Extreme">Extreme</option>
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

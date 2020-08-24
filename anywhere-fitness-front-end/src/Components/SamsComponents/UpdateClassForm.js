import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export default function UpdateClassForm(props) {
  const { id } = useParams();
  const history = useHistory();

  //   useEffect(() => {
  //       axiosWithAuth().get(`/${id}`)
  //   }, [id])

  const updateClass = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put("/api/auth/instructor/classes/:id", props.inputs)
      .then((res) => {
        console.log(res);
      });
  };
  const handleChange = (e) => {
    props.setInputs({ ...props.inputs, [e.target.name]: e.target.value });
  };
  return (
    <div>
      Edit a class:
      <form onSubmit={updateClass}>
        <label>
          Name of Class:
          <input
            type="text"
            name="name"
            value={props.inputs.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={props.inputs.type}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Start time:
          <input
            type="text"
            name="startTime"
            value={props.inputs.startTime}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Duration:
          <input
            type="text"
            name="duration"
            value={props.inputs.duration}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Intensity:
          <select name="intensity" value={props.inputs.intensity}>
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
            value={props.inputs.location}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Current number of registered attendees:
          <input
            type="text"
            name="current"
            value={props.inputs.current}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Maximum class size:
          <input
            type="text"
            name="maximum"
            value={props.inputs.maximum}
            onChange={handleChange}
          />
        </label>
        <br />

        <button>Add Class</button>
      </form>
    </div>
  );
}

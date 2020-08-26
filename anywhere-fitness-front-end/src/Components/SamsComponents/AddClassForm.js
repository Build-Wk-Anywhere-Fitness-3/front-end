import React, { useContext } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { ClassContext } from "../../App";
import { initialValues } from "../../App";

export default function AddClassForm() {
  const history = useHistory();
  const { inputs, setInputs } = useContext(ClassContext);
  console.log("My name is", inputs.instructor_name);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const postNewClass = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/instructor/classes", inputs)
      .then((res) => {
        console.log(res);
        history.push("/instructor");
        setInputs(initialValues);
      })
      .catch((err) => {
        console.log(err);
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
          Date:
          <input
            type="text"
            name="date"
            value={inputs.date}
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
          <select name="intensity" onChange={handleChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
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
            name="signedUp"
            value={inputs.signedUp}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Maximum class size:
          <input
            type="text"
            name="max_size"
            value={inputs.max_size}
            onChange={handleChange}
          />
        </label>
        <br />

        <button>Add Class</button>
      </form>
    </div>
  );
}

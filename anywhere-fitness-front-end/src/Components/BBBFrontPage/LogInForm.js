import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import * as yup from "yup";
import { Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { ClassContext } from "../../App";

const LoginForm = () => {
  const base = {
    username: "",
    password: "",
  };

  // STATE:
  //post
  const [post, setPost] = useState();
  //form
  const [formState, setForm] = useState(base);
  //button
  const [buttonDisabled, setButtonDisabled] = useState(true);
  //errors
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const { inputs, setInputs } = useContext(ClassContext);
  const [visState, setVisState] = useState("hidden");

  //INPUT CHANGE
  const data = [];
  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setForm(newFormData);
  };

  const history = useHistory();

  //VALIDATE
  const validateChange = (e) => {
    yup
      .reach(signUpSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
        console.log("success");
      })
      .catch((err) => {
        console.log("error:", err);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  //SCHEMA
  const signUpSchema = yup.object().shape({
    username: yup.string().required("Must include a valid username."),
    password: yup
      .string()
      .min(3, "Must be a minimum of 3 characters.")
      .max(10, "Must be a maximum of 10 characters.")
      .required("Must include a password."),
  });

  //SUBMIT
  const formSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", formState.username);
    setInputs({ ...inputs, instructor_name: localStorage.getItem("username") });
    axios
      .post("https://anytime-fitness.herokuapp.com/api/auth/login", formState)
      .then((res) => {
        console.log(res);
        setPost(res.data);
        data.push(post);
        setForm(base);
        localStorage.setItem("token", res.data.token);
        history.push(`/${res.data.role}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Disable button if invalid inputs

  useEffect(() => {
    if (formState.username.length >= 3 && formState.password.length > 3) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formState]);

  return (
    <div>
      <form onSubmit={formSubmit}>
        <h2 className="sign-up">Login:</h2>

        <label htmlFor="username" className="label">
          Username:&#160;
          <input
            type="username"
            name="username"
            placeholder="Noel.DaCosta@gmail.com"
            value={formState.username}
            onChange={inputChange}
            data-cy="username"
          />
          {errors.username.length > 0 ? <p>{errors.username}</p> : null}
        </label>

        <label htmlFor="password" className="label">
          Password:&#160;
          <input
            type="password"
            name="password"
            placeholder="*aPsWrd234"
            value={formState.password}
            onChange={inputChange}
            data-cy="password"
          />
          {errors.password.length > 0 ? <p>{errors.password}</p> : null}
        </label>

        <div className="button">
          <Button
            disabled={buttonDisabled}
            type="submit"
            color="warning"
            data-cy="submit"
            onClick={() => {
              setVisState("visible");
            }}
          >
            Submit
          </Button>
        </div>

        <Link to="/" className="button">
          <div className="rerouteContainer">
            <p className="rerouteText">SignUp</p>
          </div>
        </Link>
      </form>
      <h2 className={visState}>
        {" "}
        Logging in... {JSON.stringify(post, null, 2)}
      </h2>
    </div>
  );
};

export default LoginForm;

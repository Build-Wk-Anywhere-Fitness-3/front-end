import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const base = {
    email: "",
    password: "",
    remember: "",
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
    email: "",
    password: "",
    remember: false,
  });

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
    email: yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include an email address."),
    password: yup
      .string()
      .min(6, "Must be a minimum of 6 characters.")
      .max(10, "Must be a maximum of 10 characters.")
      .required("Must include a password."),
    // type: ...none?...
    remember: yup
      .boolean()
      .oneOf([true], "You must accept Terms and Conditions"),
  });

  //SUBMIT
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setPost(res.data);
        data.push(post);
        setForm(base);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Disable button if invalid inputs

  useEffect(() => {
    if (formState.email.length > 3 && formState.password.length > 3) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formState]);


  return (
    <div>
      <form onSubmit={formSubmit}>
        <h2 className="sign-up">Login:</h2>

        <label htmlFor="email" className="label">
          Email:&#160;
          <input
            type="email"
            name="email"
            placeholder="Noel.DaCosta@gmail.com"
            value={formState.email}
            onChange={inputChange}
            data-cy="email"
          />
          {errors.email.length > 0 ? <p>{errors.email}</p> : null}
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

        <div className="termsContainer">
          <label htmlFor="type" className="label" id="typeLabel">
            Type:&#160;
            <select name="type" data-cy="type">
              <option value="Trainee">Trainee</option>
              <option value="Instructor">Instructor</option>
            </select>
          </label>

          <label htmlFor="remember" className="checkboxLabel">
            <span>Remember:&#160;</span>
            <input
              className="checkboxInput"
              type="checkbox"
              name="remember"
              checked={formState.remember}
              value={formState.remember}
              onChange={inputChange}
              data-cy="remember"
            />
          </label>
        </div>

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

        <Link to="/">
          <p>SignUp</p>
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

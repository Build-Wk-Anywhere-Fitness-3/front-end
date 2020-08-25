import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const base = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "",
    terms: "",
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
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "",
    terms: false,
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
    firstName: yup
      .string()
      .test(
        "length",
        "First Name must be more than 2 characters",
        (val) => val.length > 2
      ),
    lastName: yup
      .string()
      .test(
        "length",
        "Last Name must be more than 2 characters",
        (val) => val.length > 2
      ),
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
    terms: yup.boolean().oneOf([true], "You must accept Terms and Conditions"),
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

  // Disable button if invalid inputs
  // useEffect(() => {
  //   if ((formState.firstName.length < 3) && (formState.lastName.length < 3) && (formState.email.length < 3) && (formState.terms === false)) {
  //     setButtonDisabled(true);
  //   } else {
  //     setButtonDisabled(false);
  //   }
  // }, [formState]);

  useEffect(() => {
    if (formState.firstName.length > 2) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formState]);

  useEffect(() => {
    if (formState.lastName.length > 2) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formState]);

  useEffect(() => {
    if (formState.email.length > 2) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formState]);

  useEffect(() => {
    if (formState.terms) {
      setButtonDisabled(!true);
    } else {
      setButtonDisabled(!false);
    }
  }, [formState]);

  return (
    <div>
      <form onSubmit={formSubmit}>
        <h2 className="sign-up">Sign-Up Today!</h2>

        <label htmlFor="firstName" className="label">
          First Name:&#160;
          <input
            type="text"
            name="firstName"
            placeholder="Noel"
            value={formState.firstName}
            onChange={inputChange}
            data-cy="firstName"
          />
          {errors.firstName.length > 0 ? <p>{errors.firstName}</p> : null}
        </label>

        <label htmlFor="lastName" className="label">
          Last Name:&#160;
          <input
            type="text"
            name="lastName"
            placeholder="DaCosta"
            value={formState.lastName}
            onChange={inputChange}
            data-cy="lastName"
          />
          {errors.lastName.length > 0 ? <p>{errors.lastName}</p> : null}
        </label>

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

          <label htmlFor="terms" className="checkboxLabel">
            <span>Terms:&#160;</span>
            <input
              className="checkboxInput"
              type="checkbox"
              name="terms"
              checked={formState.terms}
              value={formState.terms}
              onChange={inputChange}
              data-cy="terms"
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
        <Link to="/login">
          <p>Login</p>
        </Link>
      </form>
      <h2 className={visState}>
        {" "}
        Congratulations! You signed up! {JSON.stringify(post, null, 2)}
      </h2>
    </div>
  );
};

export default SignUpForm;

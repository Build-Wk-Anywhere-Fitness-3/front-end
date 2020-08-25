import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const base = {
    name: "",
    email: "",
    username: "",
    password: "",
    role: "",
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
    name: "",
    email: "",
    username: "",
    password: "",
    role: "",
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
    name: yup
      .string()
      .test(
        "length",
        "First Name must be more than 2 characters",
        (val) => val.length > 2
      ),
    email: yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include an email address."),
    username: yup
      .string()
      .test(
        "length",
        "First Name must be more than 2 characters",
        (val) => val.length > 2
      ),
    password: yup
      .string()
      .min(6, "Must be a minimum of 6 characters.")
      .max(10, "Must be a maximum of 10 characters.")
      .required("Must include a password."),
    // role: ...none?...
  });

  //SUBMIT
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      // .post("https://reqres.in/api/users", formState)
      .post("https://anytime-fitness.herokuapp.com/api/auth/register", formState)
      .then((res) => {
        setPost(res.data);
        console.log(res);
        data.push(post);
        setForm(base);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Disable button if invalid inputs
  // useEffect(() => {
  //   if ((formState.name.length < 3) && (formState.lastName.length < 3) && (formState.email.length < 3) && (formState.terms === false)) {
  //     setButtonDisabled(true);
  //   } else {
  //     setButtonDisabled(false);
  //   }
  // }, [formState]);

  useEffect(() => {
    if (formState.name.length > 2) {
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
    if (formState.username.length > 2) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formState]);

  useEffect(() => {
    if (formState.password.length > 2) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formState]);

  return (
    <div>
      <form onSubmit={formSubmit}>
        <h2 className="sign-up">Sign-Up Today!</h2>

        <label htmlFor="name" className="label">
          Name:&#160;
          <input
            type="text"
            name="name"
            placeholder="Noel"
            value={formState.name}
            onChange={inputChange}
            data-cy="name"
          />
          {errors.name.length > 0 ? <p>{errors.name}</p> : null}
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

        <label htmlFor="username" className="label">
          Username:&#160;
          <input
            type="username"
            name="username"
            placeholder="NoelFit"
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

        <div className="termsContainer">
          <label htmlFor="role" className="label" id="typeLabel">
            Role:&#160;
            <select name="role" data-cy="role">
              <option value="Trainee">Trainee</option>
              <option value="Instructor">Instructor</option>
            </select>
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

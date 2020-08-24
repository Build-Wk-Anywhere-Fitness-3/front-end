import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Button } from "reactstrap";

const SignInForm = () => {
  const base = {
    name: "",
    size: "",
    peperoni: false,
    mushroom: false,
    onion: false,
    sausage: false,
    special: "",
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
    size: "",
    peperoni: "",
    mushroom: "",
    onion: "",
    sausage: "",
    special: "",
  });

  const [visState, setVisState] = useState("hidden")

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
      .reach(pizzaSchema, e.target.name)
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
  const pizzaSchema = yup.object().shape({
    name: yup
      .string()
      .test(
        "length",
        "Name must be more than 2 characters",
        (val) => val.length > 2
      ),
    size: yup.boolean().oneOf(["Small", "Medium", "Large"]),
    pepperoni: yup.boolean().oneOf([true, false]),
    mushroom: yup.boolean().oneOf([true, false]),
    onion: yup.boolean().oneOf([true, false]),
    sausage: yup.boolean().oneOf([true, false]),
    special: yup.string(),
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

  useEffect(() => {
    if (formState.name.length < 3) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [formState]);

  return (
    <div>
      <h1>Sign In Here!</h1>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name:&#160;
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={inputChange}
            data-cy="name"
          />
          {errors.name.length > 0 ? <p>{errors.name}</p> : null}
        </label>

        <label htmlFor="size">
          Pizza Size:&#160;
          <select name="size" data-cy="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>

        <h2>Toppings:</h2>
        <label htmlFor="pepperoni">
          Pepperoni&#160;
          <input
            type="checkbox"
            checked={formState.pepperoni}
            value={formState.pepperoni}
            name="pepperoni"
            onChange={inputChange}
            data-cy="pepperoni"
          />
        </label>

        <label htmlFor="mushroom">
          Mushroom&#160;
          <input
            type="checkbox"
            name="mushroom"
            checked={formState.mushroom}
            value={formState.mushroom}
            onChange={inputChange}
            data-cy="mushroom"
          />
        </label>

        <label htmlFor="onion">
          Onion&#160;
          <input
            type="checkbox"
            name="onion"
            checked={formState.onion}
            value={formState.onion}
            onChange={inputChange}
            data-cy="onion"
          />
        </label>

        <label htmlFor="sausage">
          Sausage&#160;
          <input
            type="checkbox"
            name="sausage"
            checked={formState.sausage}
            value={formState.sausage}
            onChange={inputChange}
            data-cy="sausage"
          />
        </label>

        <label htmlFor="special">
          Special Instructions:&#160;
          <textarea
            name="special"
            value={formState.special}
            onChange={inputChange}
            data-cy="special"
          />
          {errors.special.length > 0 ? <p>{errors.special}</p> : null}
        </label>
        
        <br />

        <Button
          disabled={buttonDisabled}
          type="submit"
          color="warning"
          data-cy="submit"
          onClick={() => {setVisState('visible')}}
        >
          Submit
        </Button>

        <br/>
        
        <h2 className={visState} >
          {" "}
          Congratulations! Pizza is on it's way! {JSON.stringify(post, null, 2)}
        </h2>
      </form>
    </div>
  );
};

export default SignInForm;

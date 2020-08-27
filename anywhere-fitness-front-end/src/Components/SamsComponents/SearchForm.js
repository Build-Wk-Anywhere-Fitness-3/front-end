import React, { useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { FormStyle } from "../../styled-components/";
const initialValues = {
  category: "",
  input: "",
};
export default function SearchForm({ setClientClassList, getClassList }) {
  const [search, setSearch] = useState(initialValues);

  const handleChange = (e) => {
    if (e.target.name === "category") {
      getClassList();
    }
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .get("/api/auth/users/classes")
      .then((res) => {
        let newArr = res.data.data.filter(
          (cls) => cls[search.category] === search.input
        );
        setClientClassList(newArr);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <FormStyle onSubmit={onSubmit}>
        Search for classes:
        <select name="category" onChange={handleChange}>
          <option value="">Select a Category</option>

          <option value="type">Type</option>
          <option value="date">Date</option>
          <option value="duration">Duration</option>
          <option value="intensity">Intensity</option>
          <option value="location">Location</option>
        </select>
        <input
          type="text"
          name="input"
          value={search.input}
          onChange={handleChange}
        />
        <button>Search</button>
      </FormStyle>
    </div>
  );
}

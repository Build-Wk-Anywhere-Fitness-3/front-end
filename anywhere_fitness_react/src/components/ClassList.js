import React, { useState, useEffect, createContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ClassContext = createContext();

export default function ClassList() {
  const [classList, setClassList] = useState([]);

  const getClassList = () => {
    axiosWithAuth()
      .get("")
      .then((res) => {
        console.log(res);
        //   setClassList(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getClassList();
  }, []);
  return (
    <ClassContext.Provider value={classList}>
      <div></div>
    </ClassContext.Provider>
  );
}

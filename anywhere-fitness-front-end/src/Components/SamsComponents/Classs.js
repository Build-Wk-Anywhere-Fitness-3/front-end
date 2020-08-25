import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import ClassCard from "./ClassCard";

const dummyData = [
  {
    name: "Boxing Fundamentals",
    type: "Boxing",
    instructor_name: "Sam",
    date: "8/24",
    duration: "1 hour",
    intensity: "Challenging",
    location: "Remote",
    signedUp: "57",
    max_size: "N/A",
  },
  {
    name: "Cycling Intervals",
    type: "Cycling",
    instructor_name: "Sam",
    date: "8/24",
    duration: "1 hour",
    intensity: "Challenging",
    location: "Spin City",
    signedUp: "57",
    max_size: "100",
  },
];

export default function Classs() {
  const [classs, setClasss] = useState(dummyData);
  const { id } = useParams();

  const fetchClass = (id) => {
    axiosWithAuth()
      .get(`/api/auth/instructor/classes/${id}`)
      .then((res) => {
        setClasss(res.data);
      });
  };
  useEffect(() => {
    fetchClass(id);
  }, [id]);
  return (
    <div>
      <ClassCard cls={classs} />
    </div>
  );
}

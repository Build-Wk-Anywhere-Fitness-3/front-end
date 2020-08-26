import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import ClassCard from "./ClassCard";

export default function Classs() {
  const [classs, setClasss] = useState();
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

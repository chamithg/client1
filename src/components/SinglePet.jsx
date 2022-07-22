import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context";

export default function SinglePet() {
  const { pet, fetchOne, handleDelete } = useGlobalContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const deletePet = () => {
    handleDelete(id);
    navigate("/");
  };

  useEffect(() => {
    fetchOne(id);
  }, []);
  return (
    <div className="d-flex justify-content-center">
      <div className="container w-50">
        <h2 className="m-3">Details About : {pet.name}</h2>
        <Link to="/"> back to home</Link>
        <button className="btn btn-danger m-2" onClick={() => deletePet()}>
          adopt {pet.name}{" "}
        </button>
        <div className="border p-5">
          <h4 className="text-left">Type: {pet.type}</h4>
          <h4 className="text-left">Description: {pet.desc}</h4>

          <h3 className="text-left text-info">Skills</h3>

          <p>{pet?.skill1}</p>
          <p>{pet?.skill2}</p>
          <p>{pet?.skill3}</p>
        </div>
      </div>
    </div>
  );
}

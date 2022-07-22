import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../Context";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function EditPet() {
  const { fetchOne, pet, formError, handleEdit, setFormError } =
    useGlobalContext();
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const changeHandler = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchOne(id);
  }, []);

  useEffect(() => {
    setInput(pet);
  }, [pet]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(id, input, navigate);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="container w-75">
        <h3>Edit {input.name}</h3>

        <Link to="/"> back to home</Link>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Pet name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={changeHandler}
              value={input.name}
            />
            <p className="text-danger">{formError.name?.message}</p>
          </div>
          <div className="form-group">
            <label>Pet type</label>
            <input
              name="type"
              type="text"
              className="form-control"
              onChange={changeHandler}
              value={input.type}
            />
            <p className="text-danger">{formError.type?.message}</p>
          </div>
          <div className="form-group">
            <label>Pet Description</label>
            <input
              type="text"
              name="desc"
              className="form-control"
              onChange={changeHandler}
              value={input.desc}
            />
            <p className="text-danger">{formError.desc?.message}</p>
          </div>
          <div className="form-group">
            <label>Skill 1</label>
            <input
              type="text"
              name="skill1"
              className="form-control"
              onChange={changeHandler}
              value={input.skill1}
            />
          </div>
          <div className="form-group">
            <label>Skill 2</label>
            <input
              type="text"
              name="skill2"
              className="form-control"
              onChange={changeHandler}
              value={input.skill2}
            />
          </div>
          <div className="form-group">
            <label>Skill 3</label>
            <input
              type="text"
              name="skill3"
              className="form-control"
              onChange={changeHandler}
              value={input.skill3}
            />
          </div>
          <input
            type="submit"
            value="Edit Pet"
            className="btn btn-primary m-2"
          />
        </form>
      </div>
    </div>
  );
}

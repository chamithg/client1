import React, { useState } from "react";
import { useGlobalContext } from "../Context";
import { useNavigate, Link } from "react-router-dom";

export default function AddPet() {
  const { fetchAdd, formError } = useGlobalContext();
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const changeHandler = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    fetchAdd(input, navigate);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="container w-75">
        <h3>Know a pet needing a home?</h3>

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
            value="add Pet"
            className="btn btn-primary m-2"
          />
        </form>
      </div>
    </div>
  );
}

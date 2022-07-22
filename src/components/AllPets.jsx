import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

export default function AllPets() {
  const { pets } = useGlobalContext();
  return (
    <div>
      <Link to="pets/new"> add a pet to the shelter</Link>
      <h3>These pets are looking for a good home ....</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => {
            return (
              <tr>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>
                  <Link to={`pets/${pet._id}`}>Details</Link> |
                  <Link to={`pets/${pet._id}/edit`}>Edit</Link>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

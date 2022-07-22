import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AllPets from "./components/AllPets";
import AddPet from "./components/AddPet";
import SinglePet from "./components/SinglePet";
import EditPet from "./components/EditPet";

function App() {
  return (
    <div className="App p-5">
      <h1>Pet Shelter</h1>
      <Routes>
        <Route exact path="/" element={<AllPets />}></Route>
        <Route exact path="/pets/new" element={<AddPet />}></Route>
        <Route exact path="/pets/:id" element={<SinglePet />}></Route>
        <Route exact path="/pets/:id/edit" element={<EditPet />}></Route>
      </Routes>
    </div>
  );
}

export default App;

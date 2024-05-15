import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useStore from "../../Stores/useStore";
import logo from "../../assets/logo-f1.png";

export default function Navbar({ onSearch }) {
  const navigate = useNavigate();

  const { search, setSearch, setCurrentPage } = useStore();

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
    onSearch(value); // Llama a onSearch cada vez que el usuario cambia el texto
    setCurrentPage(1);
  };

  const create = () => {
    // Navegar a la ruta absoluta del detalle del conductor
    navigate("/create");
  };

  return (
    <div className="nav-container h-[60px] bg-black text-white items-center flex justify-between">
      <div className="logo ml-5">
        <NavLink to="/">
          <img className="w-[50px] h-[50px] transition-all hover:scale-110  " src={logo} alt="Logo" />
        </NavLink>
      </div>

      <div className="searchbar">
        <input
          className="text-black outline-none rounded-md pl-1 "
          type="text"
          placeholder="Seacrh..."
          value={search}
          onChange={handleInputChange}
        />
      </div>

      <div className="about mr-5 bg-red-600 rounded-md p-1 ">
        <button onClick={create}>Create your driver</button>
      </div>

      <div className="about mr-5 bg-red-600 rounded-md p-1 ">
        <button>About me</button>
      </div>
    </div>
  );
}

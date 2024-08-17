import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useStore from "../../Stores/useStore";
import logo from "../../assets/F1.png";

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
    <div className="nav-container h-[68px] bg-transparent border-b  pb-1 text-white items-center pt-3 flex justify-between">
      <div className="logo ml-5">
        <NavLink to="/">
          <img className=" h-[40px] transition-all hover:scale-110  " src={logo} alt="Logo" />
        </NavLink>
      </div>

      <div className="searchbar">
        <input
          className="text-white bg-transparent border border-white outline-none p-1  pl-1 "
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleInputChange}
        />
      </div>

      <div className="about text-[15px] mr-5 bg-transparent border  p-[6px] ">
        <button onClick={create}>Create your driver</button>
      </div>

      <div className="about w-[100px] text-center text-[15px] mr-5 bg-transparent border p-[6px] ">
        <button>About me</button>
      </div>
    </div>
  );
}

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useStore from '../../Stores/useStore';


export default function Navbar({ onSearch }) {

  const navigate = useNavigate();

  const { search, setSearch,setCurrentPage } = useStore();

  // const [search, setSearch] = useState(""); 

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
    onSearch(value); // Llama a onSearch cada vez que el usuario cambia el texto
    setCurrentPage(1)
  }

  

  const create = () => {
    // Navegar a la ruta absoluta del detalle del conductor
    navigate('/create');
  };

  return (
    <div className='nav-container h-[60px] bg-black text-white items-center flex justify-between' >
        <div className="logo ml-5">
            <h2>logo</h2>
        </div>

        <div className="searchbar">
            <input className='text-black' type="text" placeholder='Seacrh...' value={search} onChange={handleInputChange} />
        </div>

        <div className="about mr-5 ">
            <button onClick={create} >Create your driver</button>
        </div>

        <div className="about mr-5 ">
            <button>About me</button>
        </div>

    </div>
  )
}

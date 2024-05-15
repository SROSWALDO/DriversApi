import React, { useEffect, useState } from "react";
import useStore from "../../Stores/useStore";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagination"; // Asegúrate de importar Pagination
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Filters from "../Filters/Filters";
import { NavLink } from "react-router-dom";

const URL = "http://localhost:3001/drivers";

export default function Home() {
  const { setDrivers, setShowFilters, showFilters, ageSortOrder, setSearch, alphabeticOrder, setTeams,teams, teamFilter, isCreate } = useStore();

  const [errorMessage, setErrorMessage] = useState("");

  const fetchDrivers = async (search = "") => {
    const url = search ? `${URL}/search?name=${search}` : URL;
    try {
      const response = await axios.get(url);
      if (response.data && Array.isArray(response.data.drivers)) {
        let drivers = response.data.drivers;

        if (isCreate !== null && isCreate !== "both") {
          drivers = drivers.filter(driver => driver.isCreate === isCreate);
        }

        // Ordenamiento por team
        if (teamFilter) {
          drivers = drivers.filter(driver => 
            driver.teams.some(team => team.name.toLowerCase().trim() === teamFilter.toLowerCase().trim())
          );
        }

        // Ordenamiento por edad
        if (ageSortOrder === 'asc') {
          drivers.sort((a, b) => new Date(a.dob).getTime() - new Date(b.dob).getTime());
        } else if (ageSortOrder === 'desc') {
          drivers.sort((a, b) => new Date(b.dob).getTime() - new Date(a.dob).getTime());
        }

        // Ordenamiento alfabético
        if(alphabeticOrder === 'asc') {
          drivers.sort((a, b) => a.name.localeCompare(b.name)); 
        } else if(alphabeticOrder === 'desc') {
          drivers.sort((a, b) => b.name.localeCompare(a.name));
        }

        setDrivers(drivers);
        setErrorMessage(drivers.length === 0 ? "No se encontraron conductores" : "");
      } else {
        console.error("Received data is not an array:", response.data);
        setErrorMessage("No se encontraron conductores");
        setDrivers([]);
      }
    } catch (error) {
      console.error("Error fetching drivers", error);
      setErrorMessage("No se encontraron conductores");
      setDrivers([]);
    }
  };

  const getTeams = async () => {
    try {
      const response = await axios.get("http://localhost:3001/teams");
      const data = response.data;
      setTeams(data)
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchDrivers();
    getTeams();
  }, [ageSortOrder, alphabeticOrder, teamFilter]);

  const handleSearch = (search) => {
    fetchDrivers(search);
  };

  const handleReturn = () => {
    // Redirigir al usuario a la página principal
    return <NavLink to="/" />;
  };

  return (
    <div className="home bg-background-home h-[113vh] bg-cover bg-no-repeat bg-center ">
      <Navbar onSearch={handleSearch} fetchDrivers={fetchDrivers} />

      <div className="home-container w-[1280px] h-[100vh] m-auto ">
        {errorMessage ? (
          <>
          <p className="error-message text-5xl flex bg-black/50 p-2 w-[800px] m-auto justify-center text-white mt-[100px] ">{errorMessage}</p>
          <button onClick={handleReturn} className="w-[100px] p-2 text-white bg-red-800 m-auto flex justify-center mt-[100px] " >Return</button>
          </>
        ) : (
          <>
            <div className="filters mt-2 ml-5 relative flex">
              <button
                className="bg-red-600 text-white p-1 w-[80px] rounded-md  "
                onClick={() => setShowFilters(!showFilters)}>
                Filters
              </button>
              {showFilters && <Filters fetchDrivers={fetchDrivers} teams={teams} isCreate={isCreate} />}
            </div>

            <Cards />
            
            <div className="pagination">
              <Pagination />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

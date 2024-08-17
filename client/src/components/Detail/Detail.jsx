import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useStore from "../../Stores/useStore";
import axios from "axios";
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'
import home from '../../assets/home.svg'


export default function Detail() {
  const { id } = useParams();

  const URL = `http://localhost:3001/drivers/${id}`;

  const allDriversURL = `http://localhost:3001/drivers`;

  const [totalDrivers, setTotalDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get(allDriversURL);
        setTotalDrivers(response.data.drivers); 
        console.log(totalDrivers);
      } catch (error) {
        console.log("Error al obtener la lista de conductores: ", error);
      }
    };

    fetchDrivers();
  }, []);

  const navigate = useNavigate()

  const nextDriver = () => {
    navigate(`/driver/${Number(id) + 1}`);
  }

  const prevDriver = () => {
    navigate(`/driver/${Number(id) - 1 }`)
  }

  const toHomme = () => {
    navigate('/')
  }

  const { driver, setDriver } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        const { data } = response;

        if (data) {
          setDriver(data);
        } else {
          alert(`No existe el conductor con el ID: ${id}`);
        }
      } catch (error) {
        console.log("Error al obtener datos del conductor: ", error);
      }
    };
    fetchData();
  }, [id, URL]);

  // Formatear los nombres de los equipos como una cadena separada por comas
  const teamNames = driver.teams
    ? driver.teams.map((team) => team.name).join(", ")
    : "";

  const description = driver.description || `${driver.name} is a big driver`;

  return (
    <div className=" bg-gradient-to-r from-black to-red-700 h-[100vh]  w-[100%] flex items-center bg-cover bg-center font-Poppins  "  >
        <button className="absolute left-14 disabled:filter disabled:grayscale disabled:brightness-50" disabled={Number(id) === 1 } onClick={prevDriver} >
            <img className="w-14 " src={arrowLeft} alt="" />
        </button>

        <button onClick={toHomme} className="absolute top-3 left-[48.5%] bg-black p-3 rounded-full    " >
            <img src={home} alt="" />
        </button>

      <div className="card-container flex justify-between  bg-black/80 h-[550px]  w-[1100px] rounded-md m-auto ">

        <div className="driver-section w-[50%] flex flex-col justify-center items-center border-r h-full space-y-4">

          <img className="w-[200px] rounded-full" src={driver.image} alt="" />
          <p className="text-white text-5xl text-center font-bold">
            {driver.name}
          </p>
          <p className="text-white font-bold text-xl bg-gradient-to-l p-1 red-600  " >{driver.nationality}</p>
          <p className="text-red-600 text-center text-xl">{driver.dob}</p>

        </div>

        <div className="m-auto" >
            <p className="text-white text-4xl font-bold text-center  " >Teams</p>
          <p className="text-red-600 text-center mb-4 text-xl ">{teamNames}</p>
          <p className="text-white w-[510px] text-center " >{description}</p>
        </div>

      </div>
      <button className="absolute right-14 disabled:filter disabled:grayscale disabled:brightness-50 " disabled={Number(id) >= totalDrivers.length } onClick={nextDriver} >
        <img className="w-14" src={arrowRight} alt="" />
      </button>
    </div>
  );
}

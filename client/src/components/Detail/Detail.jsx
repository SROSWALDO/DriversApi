import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useStore from '../../Stores/useStore';
import axios from 'axios';

export default function Detail() {

    const { id } = useParams();

    const URL = `http://localhost:3001/drivers/${id}`;

    const { driver, setDriver } = useStore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                const { data } = response;
                
                if(data) {
                    setDriver(data);
                } else {
                    alert(`No existe el conductor con el ID: ${id}`);
                }
            } catch (error) {
                console.log("Error al obtener datos del conductor: ", error);
            }
        }
        fetchData();
    },[id, URL]);

    // Formatear los nombres de los equipos como una cadena separada por comas
    const teamNames = driver.teams ? driver.teams.map(team => team.name).join(", ") : '';
    
    const description = driver.description || `${driver.name} is a big driver`;

  return (
    <div className=' bg-background-home h-[100vh] w-[100%] flex items-center bg-cover bg-center ' >
        <div className="card-container bg-black/50 flex w-[1100px] m-auto ">
            
            <div className="card-img">
              <img className=' w-[250px] ' src={driver.image} alt={driver.name} />
            </div>

            <div className="card-body text-white m-auto text-center ">
                <h2 className='text-5xl  '>{driver.name}</h2>
                <p className=' text-xl mt-3 '>{driver.dob}</p>
                <p className=' text-xl mt-2 '>Teams: {teamNames} </p>
                <p className='w-[700px] mt-3 '>{description}</p>
            </div>

        </div>
    </div>
  )
};

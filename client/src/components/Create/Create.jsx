import { NavLink, useNavigate } from "react-router-dom";
import useStore from "../../Stores/useStore";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import returnButton from '../../assets/return2.svg'; 

export default function Create() {
  const { teams, setTeams } = useStore();

  //* ------------------ validaciones -------------------------
  const isValidName = (name) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name);
  };

  const isValidNationality = (nationality) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(nationality);
  };

  const isValidImageUrl = (url) => {
    const regex =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
    return regex.test(url);
  };
  //* -----------------------------------------------------------

  const getTeams = async () => {
    try {
      const response = await axios.get("http://localhost:3001/teams");
      const data = response.data;
      setTeams(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  const [selectedTeams, setSelectedTeams] = useState([]);

  const Navigate = useNavigate()

  const handleChange = (e) => {
    const selectedTeam = e.target.value;

    // Verificar si ya se han seleccionado tres equipos
    if (selectedTeams.length < 3) {
      setSelectedTeams((prevTeams) => [...prevTeams, selectedTeam]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const nationality = e.target.nationality.value;
    const dob = e.target.dob.value;

    if (
      !name ||
      !description ||
      !image ||
      !nationality ||
      !dob ||
      selectedTeams.length === 0
    ) {
      completeForm();
      return;
    }

    if (name.length > 25) {
      Swal.fire("You must enter a name that is less than 20 characters. ");
      return;
    }

    if (!isValidName(name)) {
      Swal.fire("Please enter a valid Name");
      return;
    }

    if (!isValidNationality(nationality)) {
      Swal.fire("Please enter a valid Nationality");
      return;
    }

    if (!isValidImageUrl(image)) {
      Swal.fire("Please enter a valid HTTP image URL.");
      return;
    }

    const formData = {
      name,
      description,
      image,
      nationality,
      dob,
      teams: selectedTeams,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/drivers",
        formData);
      succesAlert();
      console.log("Conductor creado:", response.data);
      returnHome()
    } catch (error) {
      console.error("Error al crear conductor:", error.message);
      errorAlert();
    }
  };

  const succesAlert = () => {
    return Swal.fire({
      title: "The Driver Create! 🏎️",
      icon: "success",
    });
  };

  const errorAlert = () => {
    return Swal.fire({
      title: "Error to Create Driver",
      icon: "error"
    })
  }

  const completeForm = () => {
    return Swal.fire("Please complete all fields");
  };

  const returnHome = () => {
    Navigate("/")
    
  }

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-black to-red-700  bg-center h-screen font-Poppins ">
      <form
        onSubmit={handleSubmit}
        className="w-[900px] bg-black/60 p-6 rounded shadow-md">
        <h2 className="text-4xl  text-white text-center font-semibold mb-7">
          Create new driver
        </h2>

        <div className="flex justify-between " >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white">
            FullName
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ej. Oswaldo Palacios"
            className="mt-1 p-2 w-[310px] bg-transparent text-white border rounded-md"/>
        </div>

        <div className="mb-4">
          <label
            htmlFor="nationality"
            className="block text-sm font-medium text-white">
            Nationality
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            placeholder="Ej. Mexican"
            className="mt-1 p-2 bg-transparent text-white w-[250px] border rounded-md"/>
        </div>

        <div className="mb-4">
          <label
            htmlFor="birthdate"
            className="block text-sm font-medium text-white">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="mt-1 p-2 w-[250px] bg-transparent text-white border rounded-md"/>
        </div>
        </div>

        

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-white">
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Url..."
            className="mt-1 p-2 bg-transparent text-white w-full border rounded-md"/>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-white">
            Descrition
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Add description..."
            rows="3"
            className="mt-1 p-2 w-full bg-transparent text-white border rounded-md resize-none "
          ></textarea>
        </div>
        <div className="flex justify-center items-center mb-3 " >
        <p className="text-white text-center" >Select Your Teams <span className="text-gray-500 ml-2 text-sm">(Max 3)</span> </p>
        
        </div>

        <div className="mb-4 m-auto flex justify-center ">
          
          <select
            onChange={handleChange}
            className=" rounded-md bg-black/90 border text-white "
            id="teams"
            disabled={selectedTeams.length >= 3}>
            <option value=""> Teams </option>
            {teams.teams?.map((team, index) => (
              <option key={index} value={team.name}>
                {team.name}
              </option>
            ))}
          </select>
        </div>

        {/* Mostrar los equipos seleccionados */}
        
        <div className="mb-4 flex justify-center  ">
          
          {selectedTeams.map((team, index) => (
            <div
              key={index}
              className="text-white  ml-3 bg-red-600 rounded-md p-1 mb-2 ">
              {team}
            </div>
          ))}
        </div>

        <div className="flex justify-center" >
        <button
          type="submit"
          className="bg-red-700 w-[200px] text-white py-2 px-4 rounded hover:bg-red-600 ">
          Create Driver
        </button>
        </div>
      </form>

      

    </div>
  );
}
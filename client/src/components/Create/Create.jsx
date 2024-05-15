import { NavLink } from "react-router-dom";
import useStore from "../../Stores/useStore";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

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
    <div className="flex justify-center items-center bg-background-home bg-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[600px] bg-black/60 p-6 rounded shadow-md">
        <h2 className="text-2xl text-white text-center font-semibold mb-4">
          Create new driver
        </h2>

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
            className="mt-1 p-2 w-full border rounded-md"/>
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
            className="mt-1 p-2 w-full border rounded-md"/>
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
            className="mt-1 p-2 w-full border rounded-md"/>
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
            className="mt-1 p-2 w-full border rounded-md"/>
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
            rows="3"
            className="mt-1 p-2 w-full border rounded-md resize-none "
          ></textarea>
        </div>

        <div className="mb-4">
          <select
            onChange={handleChange}
            className=" rounded-md bg-black/90 text-white "
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
        <div className="mb-4 flex ">
          {selectedTeams.map((team, index) => (
            <div
              key={index}
              className="text-white ml-3 bg-red-600 rounded-md p-1 mb-2 ">
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

      <div className="return absolute bg-red-600 text-white p-2 rounded-md w-[100px] text-center left-72 top-10 ">
        <NavLink to="/" >
        <button>return</button>
        </NavLink>
      </div>

    </div>
  );
}
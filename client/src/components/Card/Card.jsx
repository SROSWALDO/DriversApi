import { useNavigate } from "react-router-dom";

export default function Card({ driver }) {
  const navigate = useNavigate();

  const viewDetail = () => {
    navigate(`/driver/${driver.id}`);
  };
  const teamNames = driver.teams ? driver.teams.map(team => team.name).join(", ") : '';

  return (
    <div
      className="card-container group w-[240px] h-[370px] relative m-2 hover:scale-105 transform duration-150 ease-in-out shadow-black shadow-sm transition-all mb-5"
      onClick={viewDetail}
    >
      <div className="flex flex-col h-full">
        <div className="relative flex-grow">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.208)] to-[rgb(1,1,1)] opacity-100 transition-opacity duration-600 ease-in-out group-hover:opacity-0"></div>
          <img
            className="w-full h-[230px] object-cover"
            src={driver.image}
            alt={driver.name}
          />
        </div>

        <div className="bg-black p-2 flex flex-col justify-between flex-grow">
          <div className="flex justify-between items-center">
            <h2 className="text-white font-bold text-xl w-[160px]">
              {driver.name.toUpperCase()}
            </h2>
            <p className="text-xl font-bold text-red-600">
              {driver.id}
            </p>
          </div>
          <p className="text-white text-[11px] font-semibold">
            {teamNames}
          </p>
          
          <div className="footer-card flex justify-between border-t bg-black text-white text-center  p-1 mt-auto">
            <p className="text-red-600" >Nationality</p>
            <p>{driver.nationality}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

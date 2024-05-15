import { useNavigate } from "react-router-dom"

export default function Card({ driver }) {
  const navigate = useNavigate();

  const viewDetail = () => {
    navigate(`driver/${driver.id}`)
  }

  return (
    <div className="card-container w-[200px] max-h-[240px] relative m-6  hover:scale-105 transform transition duration-150 ease-in-out shadow-black shadow-lg " onClick={viewDetail} >
      <div className="card-header h-[250px]">
        <img className=" w-[250px] h-[240px] object-cover rounded-t-md" src={driver.image} alt={driver.name} />
        <h2 className=" text-white bg-red-600 p-1 rounded-r-md  absolute bottom-0" > {driver.name} </h2>
        <div className="footer-card bg-black/50 text-white text-center rounded-b-md p-1">
            <p> {driver.nationality} </p>
        </div>
      </div>
    </div>
  );
}

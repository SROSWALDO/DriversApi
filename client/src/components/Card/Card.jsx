

export default function Card({ driver }) {
  return (
    <div className="card-container w-[200px] max-h-[240px] relative m-6 pt-3">
      <div className="card-header h-[250px]">
        <img className=" w-[250px] h-[240px] object-cover rounded-t-md" src={driver.image} alt={driver.name} />
        <h2 className=" text-white bg-red-600 p-1 rounded-r-md  absolute bottom-0" > {driver.name} </h2>
        <div className="footer-card bg-white text-center rounded-b-md p-1">
            <p> {driver.nationality} </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import logo from "../../assets/F1.png";
import car from '../../assets/car-f1.png'
import { useNavigate } from 'react-router-dom'

export default function Landing() {

  const navigate = useNavigate();

  const toHome = () => {
    navigate('/home')
  }


  return (
    <div className='bg-black w-full h-[100vh]' >
      <div className="navbar w-full  h-[60px] flex justify-between items-center p-3">
        <img className='w-[150px] ml-5 ' src={logo} alt="" />
        <button onClick={() => navigate('/about') } className='border text-white w-28 h-[35px] mr-5 ' >About me</button>
      </div>

      <div className="content w-full h-[90vh] flex justify-between items-center relative ">
        <div className="text p-10 ">
        <p className='text-white text-7xl font-bold ' >DRIVERS API <span className='text-red-600' >F1</span> </p>
        <p className='text-white' >FIND YOUR FAVORITE DRIVER TO LEARN MORE ABOUT HIM</p>
        <p className='text-white w-[510px] mt-5 text-xl font-semibold ' >Search your favorite driver and find the information you nedd.You can also find the latest news and the best drivers of the moment.</p>
        <button onClick={toHome} className='bg-red-700 text-white w-[300px]  p-1 mt-4' >Get Started</button>
        </div>
        <div className="image">
          <img className='w-[900px] absolute right-10 bottom-20 ' src={car} alt="" />
        </div>
      </div>

    </div>
  )
}

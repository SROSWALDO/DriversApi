import React from 'react';
import useStore from '../../Stores/useStore';
import Card from '../Card/Card';

const Cards = () => {
  const { drivers, currentPage, driversPerPage } = useStore(state => ({
    drivers: state.drivers,
    currentPage: state.currentPage,
    driversPerPage: state.driversPerPage
  }));

  // Calcula los índices para el slicing
  const indexOfLastDriver = currentPage * driversPerPage;  //1 * 10 = 10
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;  // 10 - 10
  const currentDrivers = drivers.slice(indexOfFirstDriver, indexOfLastDriver);
  

  return (
    <div className="cards flex flex-wrap justify-between">
      {currentDrivers.map((driver) => (
        <Card key={driver.id} driver={driver} />
      ))}
    </div>
  );
};

export default Cards;

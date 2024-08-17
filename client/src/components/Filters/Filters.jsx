import React, { useEffect } from 'react';
import useStore from '../../Stores/useStore';
import { Navigate } from 'react-router-dom';

export default function Filters({ fetchDrivers }) {

  const { setAgeSortOrder } = useStore();
  const { setSearch, setAlphabeticOrder, teams, setTeamFilter, setCurrentPage, isCreate, setIsCreate } = useStore();

  const handleSortChange = (event) => {
    setAgeSortOrder(event.target.value);
    setSearch('');
    setAlphabeticOrder('');
    setTeamFilter('');
  };

  const handleOriginChange = (event) => {
    const value = event.target.value === "true" ? true : (event.target.value === "false" ? false : null);
    setIsCreate(value);
    setCurrentPage(1);
  };
  

  const handleAlphabeticChange = (event) => {
    setAlphabeticOrder(event.target.value);
    setTeamFilter('');
  }

  const handleResetFilter = () => {
    setTeamFilter('');
    setAgeSortOrder('');
    setSearch('');
    setCurrentPage(1);
    setAlphabeticOrder('');
    setIsCreate('both');
    fetchDrivers();
  }

  const handleTeamChange = (event) => {
    setTeamFilter(event.target.value);
    setCurrentPage(1);
    setIsCreate('both');
    fetchDrivers();
  }

  useEffect(() => {
    fetchDrivers(); 
  }, [isCreate]);

  

  return (
    <div className='filters flex mt-[5px] ml-2 w-[1000px] '>
      
      <div className='mr-3'>
        
        <select className='  bg-transparent border text-white ' id="order" onChange={handleSortChange}>
          <option className='bg-transparent text-black' value="">Order by age</option>
          <option className='bg-transparent text-black' value="asc">Ascending</option>
          <option className='bg-transparent text-black' value="desc">Descending</option>
        </select>
      </div>

      <div className='mr-3'>
        <select className=' bg-transparent border text-white ' id="alphabetic" onChange={handleAlphabeticChange}>
          <option className='bg-transparent text-black' value="">Alphabetic Order</option>
          <option className='bg-transparent text-black' value="asc">A - Z</option>
          <option className='bg-transparent text-black' value="desc">Z - A</option>
        </select>
      </div>

      <div className='mr-3'>
        <select className=' bg-transparent border text-white ' id="origin" onChange={handleOriginChange}>
        <option className='bg-transparent text-black' value="both">All</option>
          <option className='bg-transparent text-black' value={false} >Api</option>
          <option className='bg-transparent text-black' value={true}>DB</option>
        </select>
      </div>

      <div className='mr-3'>
        
        <select className=' bg-transparent border text-white ' id="teams" onChange={handleTeamChange} >
          <option className='bg-transparent text-black' value=""> Teams </option>
          {
            teams.teams?.map((team, index) => (
              <option className='bg-transparent text-black' key={index} value={team.name}>{team.name}</option>
            ))
          }
        </select>
      </div>
      
      <div className="reset">
        <button className='bg-transparent border text-white w-[100px] ' onClick={handleResetFilter} >Reset Filter</button>
      </div>

    </div>
  );
}

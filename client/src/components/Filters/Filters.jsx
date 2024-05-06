import React from 'react';
import useStore from '../../Stores/useStore';

export default function Filters({ fetchDrivers }) {
  const { setAgeSortOrder } = useStore();
  const { search, setSearch } = useStore();

  const handleSortChange = (event) => {
    setAgeSortOrder(event.target.value);
    setSearch('');
  };

  const handleResetFilter = () => {
    setAgeSortOrder('');
    setSearch('');
    fetchDrivers();

  }

  return (
    <div className='filters flex mt-[5px] ml-2 w-[1000px] '>
      <div className='mr-3'>
        <label className='text-white bg-black/40 rounded-md p-1 mr-[5px] ' htmlFor="order">Order by age:</label>
        <select id="order" onChange={handleSortChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="reset">
        <button className='bg-black text-white  rounded-md w-[100px] ' onClick={handleResetFilter} >Reset Filter</button>
      </div>
    </div>
  );
}

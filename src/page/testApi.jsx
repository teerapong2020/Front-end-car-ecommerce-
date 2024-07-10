import { useState } from 'react';
import { carNew, onSearchCar } from '../components/API/API_Cars';

const TestApi = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchData = async () => {
    try {
      const API = await carNew(); // Assuming this fetches an array
      setData(API);
      console.log(API);
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const result = await onSearchCar(searchValue);
        setData(result);
      console.log(result);
    } catch (error) {
      console.error('Error searching for cars:', error);
    }
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setData([]);
  };

  return (
    <div className="h-96">
      <button
        className='border border-indigo-500 rounded-lg p-5 m-5'
        onClick={fetchData}
      >
        Click me
      </button>
      <div style={{ whiteSpace: 'pre-wrap' }} className='bg-lime-200 p-20'>
        {JSON.stringify(data, null, 2)}
      </div>

      <div className='bg-blue-300 p-20'>
        {Array.isArray(data) && data.map((car, index) => (
          <div key={index}>
            {/* <img src={car.file1} alt={`Car ${index}`} /> */}
          </div>
        ))}
      </div>

      <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
        <input
          type="text"
          placeholder="Search"
          className="w-full text-xs bg-transparent py-[11px] outline-none"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {searchValue && (
          <span
            className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
            onClick={handleClearSearch}
          >
            🤯
          </span>
        )}

        <span
          className="text-slate-400 cursor-pointer hover:text-black"
          onClick={handleSearch}
        >
          🔍
        </span>
      </div>
    </div>
  );
};

export default TestApi;

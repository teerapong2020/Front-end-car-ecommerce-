import { carRandom } from '../components/API/API_Cars';//เปลี่ยนตาม API ที่ใช้
import { useState } from 'react';

const TestApi = () => {
  const [Data, setData] = useState([]);

  const Active = async () => {
    const API = await carRandom();//เปลี่ยนตาม API ที่ใช้ และ เปลี่ยน parameterขึ้นกับว่า inputเป็นแบบไหน
    setData(API);
  };

  
  return (
    <div className="h-96">
      <button
        className='border border-y-indigo-500 rounded-lg p-5 m-5'
        onClick={Active}
      >
        Click me
      </button>
      <div style={{ whiteSpace: 'pre-wrap' }} className=' bg-lime-200 p-20'>
        {JSON.stringify(Data, null, 2)}
      </div>
      {/* <div className='bg-blue-300 p-20'>
        {Data.map((car, index) => (
          <div key={index}>
            {car.brand}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default TestApi;

import { carRandom } from '../components/API/API_Cars';//เปลี่ยนตาม API ที่ใช้
import { useState, useEffect } from 'react';

const TestApi = () => {
  const [Data, setData] = useState([]);

  const Active = async () => {
    const API = await carRandom();//เปลี่ยนตาม API ที่ใช้ และ เปลี่ยน parameterขึ้นกับว่า inputเป็นแบบไหน
    setData(API);
  };

 // UseEffect เอ๊ะสี่เหลี่ยมเป็นยังน้า ห้ะเปลี่ยนแล้ว > [] งั้นเทอร์รันปีกกาต่อได้เลยน้า {} ด้วย
  useEffect(() => {
    Active()
  }, []);

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
      <div className='bg-blue-300 p-20'>
        {Data.map((car, index) => (
          <div key={index}>
            <img src={car.file1} />
          </div>
        ))}
      </div>
      <div>
      </div>
    </div>
  );
};

export default TestApi;
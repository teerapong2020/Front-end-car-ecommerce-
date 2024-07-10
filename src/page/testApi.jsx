import { carRandom } from '../components/API/API_Cars';//เปลี่ยนตาม API ที่ใช้
import { useState } from 'react';

const TestApi = () => {
  const [Data, setData] = useState([]);
  const carId = '6688dbf25caf2cd3b6c05eee';

  const Active = async () => {
    const API = await getCarById(carId);//เปลี่ยนตาม API ที่ใช้ และ เปลี่ยน parameterขึ้นกับว่า inputเป็นแบบไหน
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
      <div className='bg-blue-300 p-20'>
        {Data.map((car, index) => (
          <div key={index}>
            <img src={car.file1} />
          </div>
        ))}
        {/* {Data.file1 && (
          <div>
            <img src={Data.file1} alt="Car" />
          </div>
        )} */}
        <div>{Data.headline}</div>
      </div>
      <div>
      </div>
    </div>
  );
};


// ใช้เทสใส่ id ใน url

// const TestApi = () => {
//   const { id } = useParams(); // รับ carId จาก URL 
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     if (id) {
//       fetchCarData(id);
//     }
//   }, [id]);

//   const fetchCarData = async (carId) => {
//     const carData = await getCarById(carId);
//     setData(carData);
//   };

//   return (
//     <div className="h-96">
//       <div style={{ whiteSpace: 'pre-wrap' }} className="bg-lime-200 p-20">
//         {JSON.stringify(data, null, 2)}
//       </div>
//       {data && (
//         <div className="bg-blue-300 p-20">
          
//           <div>Headline: {data.headline}</div>
//           <div>Brand: {data.brand}</div>
//           <div>Model: {data.model}</div>
//           <div>Type: {data.type}</div>
//           <div>Year: {data.year}</div>
//           <div>Mileage: {data.mileage}</div>
//           <div>Color: {data.color}</div>
//           <div>Fuel: {data.fuel}</div>
//           <div>Engine Capacity: {data.enginecap}</div>
//           <div>Cushion: {data.cushion}</div>
//           <div>Seat: {data.seat}</div>
//           <div>Gear: {data.gear}</div>
//           <div>Price: {data.price}</div>
//           <div>Phone Number: {data.pnumber}</div>
//           <div>Address: {data.address}</div>
//           <div>Additional Info: {data.additionalInfo}</div>
//           {data.file2 && <img src={data.file2} alt="Car" />}
//           {data.file3 && <img src={data.file3} alt="Car" />}
//           {data.file4 && <img src={data.file4} alt="Car" />}
//           {data.file5 && <img src={data.file5} alt="Car" />}
//           {data.file6 && <img src={data.file6} alt="Car" />}
//         </div>
//       )}
//     </div>
//   );
// };

export default TestApi;
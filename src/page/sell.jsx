
import bg from '../assets/cardcar.jsx/bg/bg.png'
import { Carddata } from "../data/carddata";

function Sell() {
  return (
    <>
      <hero  >
        <img className="absolute  w-full h-1/6 md:h-auto " src={bg} alt="" />
        <div className="flex justify-center bg-gray-300 ">
          <h1 className="relative text-white  font-black text-4xl my-8 md:my-24 ">
            บริการเช่ารถยนต์
          </h1>
        </div>
      </hero>
      <Carddata />
    </>
  );
}

export default Sell;

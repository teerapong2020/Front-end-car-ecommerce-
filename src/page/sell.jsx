
import bg from '../assets/cardcar.jsx/bg/bg.png'
import { Carddata } from "../data/carddata";

function Sell() {
  return (
    <>
      <hero  >
        <img className="absolute  w-full h-1/6 sm:h-1/3 " src={bg} alt="" />
        <div className="flex justify-center bg-gray-300 ">
          <h1 className="relative text-white  font-black text-4xl my-8  sm:my-24 lg:my-24">
            บริการซื้อรถยนต์
          </h1>
        </div>
      </hero>
      <Carddata />
    </>
  );
}

export default Sell;

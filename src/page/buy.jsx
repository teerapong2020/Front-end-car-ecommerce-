import bg from "../assets/cardcar.jsx/bg/bg.png";
import { Selldata } from "../data/selldata";
import { Search } from "../components/champ/search";

function Buy() {
  return (
    <>
      <hero>
        <img
          className=" absolute  mt-16 md:mt-0 md:absolute  w-full  md:py-0 sm:h-1/3 "
          src={bg}
          alt=""
        />
        <div className=" pt-20 md:py-0">
          <h1 className="relative  flex justify-center  text-white  font-black text-4xl md:py-20 ">
            บริการซื้อรถยนต์
          </h1>
        </div>
        <Search />
      </hero>
      <Selldata />
    </>
  );
}

export default Buy;

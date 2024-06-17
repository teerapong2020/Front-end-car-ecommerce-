import Slide from "../components/components_home/slide";
import WhyMe from "../components/components_home/why_me";
import CarBrands from "../components/components_home/CarBrands";
import ScollNewCar from "../components/components_home/scollNewcar";
import { useRef,useEffect } from "react";
import tokyoDrift from "../audio/tokyo drift.aac"
import { Search } from "../components/champ/search";
// import youwill from "../audio/You Will Never See Me Coming - NEFFEX.mp3"

function Home() {

  const audioRef = useRef(null);

  // useEffect(() => {
  //   audioRef.current.play().catch(error => {
  //     console.log('Error playing audio:', error);
  //   });
  // }, []);

  return (
    <div className="flex justify-center">
     
      {/* <audio ref={audioRef} src={youwill} /> */}
      <div className=" w-full">
        <Slide />
        <Search/>
        <div className="flex justify-center">
        <div className=" w-[1128px]">
                    <CarBrands />
        <ScollNewCar />
          </div>
        </div>

        <WhyMe />
      </div>
    </div>
  );
}

export default Home;

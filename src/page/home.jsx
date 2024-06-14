import Slide from "../components/components_home/slide";
import WhyMe from "../components/components_home/why_me";
import CarBrands from "../components/components_home/CarBrands";
import ScollNewCar from "../components/components_home/scollNewcar";

function Home() {
  return (
    <div className="flex justify-center">
      <div className=" w-full">
        <Slide />
        <div className="flex justify-center">
          <div className=" w-[1150px]">
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

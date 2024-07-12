import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slide from "../components/components_home/slide";
import WhyMe from "../components/components_home/why_me";
import CarBrands from "../components/components_home/CarBrands";
import ScollNewCar from "../components/components_home/scollNewcar";
import { useRef, useEffect,useState } from "react";
import tokyoDrift from "../audio/tokyo drift.aac";
import Search from "../components/champ/search"; // Adjusted import
import Banner from "../components/components_home/banner";
import ScrollRandom from "../components/components_home/scrollRandom";

function Home() {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchSubmit = (searchValue) => {
    navigate("/buy", { state: { searchValue } });
  };

  return (
    <div className="flex justify-center">
      {/* <audio ref={audioRef} src={tokyoDrift} /> */}
      <div className="w-full">
        <Slide />
        <Search onSearchSubmit={handleSearchSubmit} />
        <div className="flex justify-center">
          <div className="w-[1128px]">
            <CarBrands />
            <Banner />
            <ScrollRandom />
            <ScrollNew />
          </div>
        </div>
        <WhyMe />
      </div>
    </div>
  );
}

export default Home;

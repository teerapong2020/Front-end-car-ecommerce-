import React from "react";
import { Card } from "../components/champ/card";
import p911 from "../assets/cardcar.jsx/porche/911/porche_911_main.jpg";


export const Carddata = () => {
  const pdcards = [
    {
      name: "BMW X5",
      point: "4.9/5.0",
      category: "SUV",
      image: p911,
      location: "Pattaya, Thailand",
      price: "฿25,000",
      now: "/",
      detail: "/buy_productcard_info/bmwx5_1",
    },
    {
      name: "BMW X5",
      point: "4.9/5.0",
      category: "SUV",
      image: p911,
      location: "Pattaya, Thailand",
      price: "฿25,000",
      now: "/",
      detail: "/",
    },
    {
      name: "BMW X5",
      point: "4.9/5.0",
      category: "SUV",
      image: p911,
      location: "Pattaya, Thailand",
      price: "฿25,000",
      now: "/",
      detail: "/",
    },
    {
      name: "BMW X5",
      point: "4.9/5.0",
      category: "SUV",
      image: p911,
      location: "Pattaya, Thailand",
      price: "฿25,000",
      now: "/",
      detail: "/",
    },
    {
      name: "BMW X5",
      point: "4.9/5.0",
      category: "SUV",
      image: p911,
      location: "Pattaya, Thailand",
      price: "฿25,000",
      now: "/",
      detail: "/",
    },
    {
      name: "BMW X5",
      point: "4.9/5.0",
      category: "SUV",
      image: p911,
      location: "Pattaya, Thailand",
      price: "฿25,000",
      now: "/",
      detail: "/",
    },
  ];
  return (
    <>
      <div className=" flex flex-wrap justify-center gap-8 my-20 md:my-20">
        {pdcards.map((pdcard, index) => (
          <Card key={index} pdcard={pdcard} />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="mb-12">
          <div className=" text-2xl ">
            <button>◀️</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>7</button>
            <button>▶️</button>
          </div>
        </div>
      </div>
    </>
  );
};

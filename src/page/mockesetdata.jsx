import React from "react";
import SellAdmin from "./sellAdmin";
import { Link } from "react-router-dom";

function mockesetdata() {
  let data = {
    headline: "Tresssssss",
    brand: "Honda",
    model: "Civic",
    type: "Sedan",
    year: 2020,
    mileage: 15000,
    color: "White",
    fuel: "Petrol",
    enginecap: "1.8L",
    cushion: "Leather",
    seat: "5",
    gear: "Automatic",
    price: 450000,
    pnumber: "0812345678",
    address: "123 Main St, Bangkok, Thailand",
    additionalInfo: "One owner, full service history, accident-free",
    latitude: "33.84515527803934",
    longitude: "104.5662217562873",
    file1:
      "https://res.cloudinary.com/di8f9idgx/image/upload/v1720244966/ixuhxjluzscejal7v5tb.webp",
    file2:
      "https://res.cloudinary.com/di8f9idgx/image/upload/v1720244966/ixuhxjluzscejal7v5tb.webp",
    file3:
      "https://res.cloudinary.com/di8f9idgx/image/upload/v1720244966/ixuhxjluzscejal7v5tb.webp",
    file4:
      "https://res.cloudinary.com/di8f9idgx/image/upload/v1720244966/ixuhxjluzscejal7v5tb.webp",
    file5:
      "https://res.cloudinary.com/di8f9idgx/image/upload/v1720244966/ixuhxjluzscejal7v5tb.webp",
    file6:
      "https://res.cloudinary.com/di8f9idgx/image/upload/v1720244966/ixuhxjluzscejal7v5tb.webp",
  };
  return (
    <div>
      Hello world
      <Link to="/adminSell" state={data}>
        admin sell page
      </Link>
    </div>
  );
}

export default mockesetdata;

// to={{ pathname: '/other', state: dataToPass }}

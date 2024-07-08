// import product1 from "../assets/carModel/Audi.jpg";
import product2 from "../assets/carModel/BMW.jpg";
import product3 from "../assets/carModel/JAGUAR.jpg";
import product4 from "../assets/carModel/LandRover.jpg";
import product5 from "../assets/carModel/Mercedes-Benz.jpg";
import product6 from "../assets/carModel/mini.jpg";
import product7 from "../assets/carModel/Peugeot.jpg";
import product8 from "../assets/carModel/Porsche.jpg";
import product9 from "../assets/carModel/Tesla.jpg";
import product10 from "../assets/carModel/Volkswagen.jpg";
import product11 from "../assets/carModel/Volvo.png";

import imageMain from "../assets/carModel/test_car_card/Auidi_A7SportbackTFSI_main.webp";
import image1 from "../assets/carModel/test_car_card/Auidi_A7SportbackTFSI_1.webp";
import image2 from "../assets/carModel/test_car_card/Auidi_A7SportbackTFSI_2.webp";
import image3 from "../assets/carModel/test_car_card/Auidi_A7SportbackTFSI_3.webp";
import image4 from "../assets/carModel/test_car_card/Auidi_A7SportbackTFSI_4.webp";
import image5 from "../assets/carModel/test_car_card/Auidi_A7SportbackTFSI_6.webp";

const locations = [
  'Ubon, Thailand', 'Bangkok, Thailand', 'Chiang Mai, Thailand', 'Phuket, Thailand', 'Krabi, Thailand'
];

const miles = [
  '12000 km', '15000 km', '18000 km', '21000 km', '24000 km'
];

const example_products = [
  { id: 1, name: "Audi", price: 20000, imageMain: imageMain, image1: image1, image2: image2, image3: image3, image4: image4, image5: image5 },
  { id: 2, name: "BMW", price: 25000, imageMain: product2 },
  { id: 3, name: "JAGUAR", price: 30000, imageMain: product3 },
  { id: 4, name: "Land Rover", price: 35000, imageMain: product4 },
  { id: 5, name: "Mercedes-Benz", price: 40000, imageMain: product5 },
  { id: 6, name: "Mini", price: 45000, imageMain: product6 },
  { id: 7, name: "Peugeot", price: 20000, imageMain: product7 },
  { id: 8, name: "Porsche", price: 60000, imageMain: product8 },
  { id: 9, name: "Tesla", price: 80000, imageMain: product9 },
  { id: 10, name: "Volkswagen", price: 30000, imageMain: product10 },
  { id: 11, name: "Volvo", price: 32000, imageMain: product11 }
].map(product => ({
  ...product,
  location: locations[Math.floor(Math.random() * locations.length)],
  mile: miles[Math.floor(Math.random() * miles.length)]
}));

export default example_products;

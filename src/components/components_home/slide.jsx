import { useState, useEffect } from "react";

const carImages = [
  { src: "src/assets/carModel/Audi.jpg", alt: "Audi" },
  { src: "src/assets/carModel/BMW.jpg", alt: "BMW" },
  { src: "src/assets/carModel/JAGUAR.jpg", alt: "JAGUAR" },
  { src: "src/assets/carModel/LandRover.jpg", alt: "LandRover" },
  { src: "src/assets/carModel/Mercedes-Benz.jpg", alt: "Mercedes-Benz" },
  { src: "src/assets/carModel/mini.jpg", alt: "mini" },
  { src: "src/assets/carModel/Peugeot.jpg", alt: "Peugeot" },
  { src: "src/assets/carModel/Porsche.jpg", alt: "Porsche" },
  { src: "src/assets/carModel/Tesla.jpg", alt: "Tesla"},
  { src: "src/assets/carModel/Volkswagen.jpg", alt: "Volkswagen" },
  { src: "src/assets/carModel/Volvo.png", alt: "Volvo" },
];
const CarSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + carImages.length) % carImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="container mx-auto mt-4">
      <div className="relative p-4 shadow rounded w-full overflow-hidden h-full">
        <div className="carousel-item active">
          <img
            src={carImages[currentSlide].src}
            alt={carImages[currentSlide].alt}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default CarSlideshow;

import { useState, useEffect } from "react";
import left from "../../assets/Logo/logo_other/left.png";
import right from "../../assets/Logo/logo_other/right.png";

const CarSlideshow = () => {
  const slides = [
    { href: "#", src: "src/assets/Slide/Audi.jpg", alt: "Audi" },
    { href: "#", src: "src/assets/Slide/BWM.jpg", alt: "BMW" },
    { href: "#", src: "src/assets/Slide/Jaguar.jpg", alt: "Jaguar" },
    { href: "#", src: "src/assets/Slide/Land-Rover.jpg", alt: "Land Rover" },
    {
      href: "#",
      src: "src/assets/Slide/Mercedes-Benz.jpg",
      alt: "Mercedes-Benz",
    },
    { href: "#", src: "src/assets/Slide/Miini.jpg", alt: "Mini" },
    { href: "#", src: "src/assets/Slide/Peugeot.jpg", alt: "Peugeot" },
    {
      href: "#",
      src: "src/assets/Slide/porsche-normal.jpg",
      alt: "Porsche",
    },
    { href: "#", src: "src/assets/Slide/Tesla.jpg", alt: "Tesla" },
    { href: "#", src: "src/assets/Slide/Volvo.jpg", alt: "Volvo" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section id="SlideShow" className="flex flex-col">
      <div
        id="carImagesMain"
        className="relative mt-auto pointer-events-auto h-2/6"
      >
        <div className="relative w-full h overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((item, index) => (
              <div className="w-full flex-shrink-0 h-[500px]" key={index}>
                <a href={item.href} title={item.alt}>
                  <picture className="block w-full h-[500px]">
                    <source
                      media="(min-width:1024px)"
                      srcSet={item.src}
                      className="w-full h-[500px] object-cover"
                    />
                    <img
                      src={item.src}
                      className="w-full h-[500px] object-cover"
                      alt={item.alt}
                    />
                  </picture>
                </a>
              </div>
            ))}
          </div>
        </div>
        <img
          onClick={handlePrevClick}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer hover:scale-110"
          src={left}
        />

        <img
          onClick={handleNextClick}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer hover:scale-110"
          src={right}
        />
      </div>
    </section>
  );
};

export default CarSlideshow;

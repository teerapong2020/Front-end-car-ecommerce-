const carBrands = [
  { src: "src/assets/Logo/carLogo/audi-logo.jpg", alt: "Audi" },
  { src: "src/assets/Logo/carLogo/BMW.jpg", alt: "BMW" },
  { src: "src/assets/Logo/carLogo/Jaguar.jpg", alt: "Jaguar" },
  { src: "src/assets/Logo/carLogo/Land-Rover.jpg", alt: "Land-Rover" },
  { src: "src/assets/Logo/carLogo/Mercedes-Benz.jpg", alt: "Mercedes-Benz" },
  { src: "src/assets/Logo/carLogo/Mini-logo.jpg", alt: "Mini" },
  { src: "src/assets/Logo/carLogo/Peugeot.jpg", alt: "Peugeot" },
  { src: "src/assets/Logo/carLogo/PORSCHE-logo.jpg", alt: "Porsche" },
  { src: "src/assets/Logo/carLogo/Tesla-logo.jpg", alt: "Tesla" },
  { src: "src/assets/Logo/carLogo/Volkswagen.jpg", alt: "Volkswagen" },
  { src: "src/assets/Logo/carLogo/Volvo-logo.jpg", alt: "Volvo" },
];

const CarBrands = () => {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap mt-4 p-4 shadow rounded">
      <h2 className="text-xl font-bold mb-2">ยี่ห้อรถยนต์ทั้งหมด</h2>
      <div className="flex justify-between">
        {carBrands.map((brand, index) => (
          <div key={index} className="p-2 shadow rounded-xl flex-shrink-0">
            <img src={brand.src} alt={brand.alt} className="h-24" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarBrands;
import { useContext, useState, useEffect } from "react";///1
import { UserContext } from "../../context_component/Usercontext";///2
import { ProductCard } from "../components_home/ProductCard";
import { getCarById } from "../API/API_Cars"; // ตรวจสอบให้แน่ใจว่า path ถูกต้อง

function CarFavourite() {
    const { User } = useContext(UserContext);///3
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            if (User && User.pinned) {
                const carPromises = User.pinned.map(id => getCarById(id));
                const carResults = await Promise.all(carPromises);
                setCars(carResults);
            }
        };

        fetchCars();
    }, [User]);

    return (
        <div className="grid grid-cols-2 ">
            {cars.map((car, index) => (
                <div key={car._id || index}>
                    <ProductCard product={car} />
                </div>
            ))}
        </div>
    );
}

export default CarFavourite;

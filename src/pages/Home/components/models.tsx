import { Details } from "../../../helper/constants";
import CarCard from "../../../components/reusable/car-cards";

const Models = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-red ">
                Models
            </div>
            <div className="w-[80vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {Details.map((car, index) => (
                    <CarCard
                        key={index}
                        image={car.car_image}
                        name={car.car_name}
                        price={Number(car.car_price)}
                    />
                ))}
            </div>

        </div>
    )
}

export default Models
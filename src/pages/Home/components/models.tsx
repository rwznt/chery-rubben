import { Details } from "../../../helper/constants";
import CarCard from "../../../components/reusable/car-cards";

const Models = () => {
  return (
    <div id="models">
      <div className="flex flex-col items-center justify-center bg-black py-3 pb-9">
        <div className="text-4xl font-bold text-white py-10">Models</div>
        <div className="w-[80vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Details.map((car, index) => (
            <CarCard
              key={index}
              image={car.car_image}
              name={car.car_name}
              showTag={car.car_tag}
              tagText={car.tagText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;

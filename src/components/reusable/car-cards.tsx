interface CarProps {
  image: string;
  name: string;
  showTag?: boolean;
}

const CarCard = ({ image, name, showTag }: CarProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center rounded-lg p-5 border-2 border-gray-400 gap-4 overflow-hidden">
      {showTag && (
        <div className="ribbon-tag">
          <span>EV</span>
        </div>
      )}

      <div>
        <div className="text-white">{name}</div>
      </div>
      <div>
        <img src={image} alt="Car" />
      </div>
      <a href="">
        <div className="rounded-full border-3 px-5 py-1 border-gray-400 text-white">
          <div>Details</div>
        </div>
      </a>
    </div>
  );
};

export default CarCard;

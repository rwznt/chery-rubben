interface CarProps {
  image: string;
  name: string;
  showTag?: boolean;
}

const CarCard = ({ image, name, showTag }: CarProps) => {
  const message = `Hello, I am interested for more infomation about the ${name}. Could you please provide me with more information?`;
  const phoneNumber = "+6285121303990";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="relative flex flex-col items-center justify-center rounded-xl p-5 border-2 border-gray-400 gap-4 overflow-hidden">
      {showTag && (
        <div className="ribbon-tag">
          <span>EV</span>
        </div>
      )}

      <div>
        <div className="text-white text-2xl">{name}</div>
      </div>
      <div>
        <img src={image} alt="Car" />
      </div>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <div className="rounded-full border-3 px-5 py-1 border-gray-400 text-white text-xl">
          <div>Details</div>
        </div>
      </a>
    </div>
  );
};

export default CarCard;

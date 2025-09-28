import { formatCurrency } from "../../libs/utils";

interface CarProps {
    image: string;
    name: string;
    price: number;
}

const CarCard = ({ image, name, price }: CarProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <div>{name}</div>
            </div>
            <div>
                <img src={image} alt="Car" />
            </div>
            <div>
                <div>{formatCurrency(price)}</div>
            </div>
            <div>
                <button>Details</button>
            </div>
        </div>
    )
}

export default CarCard;
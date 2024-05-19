import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  const getRateDisplay = () => {
    if (property.rates.monthly) {
      return `Р. ${property.rates.monthly.toLocaleString()} / мес`;
    }
    return `Р. ${property.rates.weekly.toLocaleString()} / нед`;
  };
  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt="property photo"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>

        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-zinc-500 font-bold text-right md:text-center lg:text-right">
          {getRateDisplay()}
        </h3>
        
        <div className="flex justify-center gap-4 text-gray-500 mb-4">
            <p>
              <FaBed className="inline mr-2"/> {property.beds}
              <span className="md:hidden lg:inline"> Кровать</span>
            </p>
            <p>
              <FaBath className="inline mr-2"> {property.baths}</FaBath>
              <span className="md:hidden lg:inline"> Ванна</span>
            </p>
            <p>
              <FaRulerCombined className="inline mr-2"/> {property.square_feet}
              <span className="md:hidden lg:inline"> кв.м.</span>
            </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
            {property.rates.weekly && (
                <p>
                    <FaMoneyBill className="inline mr-2"/> Еженедельно
                </p>
            )}
            {property.rates.monthly && (
                <p>
                    <FaMoneyBill className="inline mr-2"/> Ежемесячно
                </p>
            )}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                <FaMapMarker className="text-lg text-orange-700" />
                <span>
                    {property.location.city}, {property.location.state}
                </span>
            </div>
            <Link href={`/properties/${property._id}`}  className="h-[36px] bg-amber-300 hover:bg-amber-500 hover:text-zinc-700 px-4 py-2 rounded-lg text-center text-sm">
            Подробнее
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

import Image from "next/image";
import Link from "next/link";

const CardItem = ({ card }) => {
  return (
    <div
      className="rounded-xl p-5 mb-3 text-white  mx-auto"
      style={{ backgroundColor: card.color }}
    >
      <Link legacyBehavior href={`./pages/card/${card._id}`}>
        <a>
          <Image
            src={
              "https://www.seekpng.com/png/full/794-7948448_mastercard-mastercard-logo-grayscale.png"
            }
            width={40}
            height={30}
            alt=""
          />

          <div className="opaciti-50 mt-6 mb-2" style={{ fontSize: 12 }}>
            Current Balance
          </div>
          <div>
            {card.balance.toLocaleString("ru-RU", {
              currency: "RUB",
              style: "currency",
            })}
          </div>
          <div className="mt-6 text-xs">{card.number}</div>
        </a>
      </Link>
    </div>
  );
};
export default CardItem;

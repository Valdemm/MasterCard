import Image from "next/image";
import Link from "next/link";

const CardItem = ({ card }) => {
  return (
    <div
      className="rounded-xl p-5 mb-3 text-white w-3/4 mx-auto"
      style={{ backgroundColor: card.color }}
    >
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
      <div>{card.balance}</div>
      <div className="mt-6 text-xs">{card.number}</div>
    </div>
  );
};
export default CardItem;

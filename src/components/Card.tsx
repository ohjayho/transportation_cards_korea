import Image from "next/image";
import { TCard } from "./CardsCarousel";
import { useState } from "react";

export default function Card({
  card,
  theta,
  cardAngle,
  idx,
  radius,
  selectedCard
}: {
  card: TCard;
  theta: number;
  cardAngle: number;
  idx: number;
  radius: number;
  selectedCard: number;
}) {
  const [cardClick, setCardClick] = useState(false);
  const cardClickHandler = () => {
    if (selectedCard === idx) {
      //only if this card is the centered card right now
      setCardClick((prev) => !prev);
    }
  };
  return (
    <>
      <div
        className={`absolute w-[190px] h-[120px] left-[10px] top-[10px] duration-500 rounded-md`}
        style={{
          transform: `rotateY(${
            idx * theta
          }deg) translateZ(${radius}px) rotateY(${
            -idx * theta
          }deg) rotateY(${cardAngle}deg)`
        }}
        key={card.name}
      >
        <div
          className="relative w-full h-full [perspective:1000px]"
          onClick={cardClickHandler}
          style={{
            animation: "float 4s ease-in-out infinite",
            animationDelay: `${idx * -150}ms`
          }}
        >
          <Image
            src={card.img}
            width={300}
            height={300}
            alt={card.name}
            className="w-full h-full absolute [backface-visibility:hidden] transition-transform duration-1000 object-cover rounded-md [image-rendering:optimizeQuality]"
            style={{
              transform: cardClick ? "rotateY(180deg)" : "rotateY(0deg)"
            }}
          />
          <div
            className={`w-full h-full bg-white rounded-md transition-all duration-1000 [backface-visibility:hidden] p-1`}
            style={{
              transform: cardClick ? "rotateY(0deg)" : "rotateY(-180deg)"
            }}
          >
            <div className="h-full border border-black rounded-md flex flex-col justify-between text-[10px] p-2">
              <div>
                <span className="w-[60%] text-[12px] mb-1">{card.name}</span>
                <div className="flex mb-1">
                  {card.category.map((category) => (
                    <span
                      className="text-[8px] bg-red-400 text-center px-1 rounded-sm text-white mr-2 last:mr-0"
                      key={category}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[8px]">Purchase: </span>
                <span>{card.availableAt}</span>
              </div>
              <div>
                <span className="text-[8px]">Charge: </span>
                <span>{card.funds}</span>
              </div>
              <div className="flex justify-end self-end">
                <a
                  href={card.website}
                  target="_blank"
                  className="text-red-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  More info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

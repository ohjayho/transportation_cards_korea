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
            <div className="h-full border border-black rounded-md flex flex-col items-center text-[10px] p-2">
              <h1 className="text-[12px] mb-2">{card.name}</h1>
              <div className="flex justify-between">
                {card.category.map((category) => (
                  <div
                    className="text-[8px] bg-red-400 text-center px-1 rounded-sm text-white mr-2 last:mr-0 mb-2"
                    key={category}
                  >
                    {category}
                  </div>
                ))}
              </div>
              <h1 className="mb-2">{card.price}</h1>
              <h1>
                <a href={card.website} target="_blank">
                  Website
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

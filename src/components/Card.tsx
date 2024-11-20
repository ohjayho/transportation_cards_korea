import Image from "next/image";
import { TCard } from "./CardsCarousel";
import { useState } from "react";
import CardBack from "./CardBack";

export default function Card({
  card,
  theta,
  // cardAngle,
  idx,
  radius,
  selectedCard,
  width
}: {
  card: TCard;
  theta: number;
  // cardAngle: number;
  idx: number;
  radius: number;
  selectedCard: number;
  width: number;
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
        className={`absolute left-[10px] top-[10px] duration-500 rounded-md`}
        style={{
          width: `${width - 20}px`,
          height: `${width * 0.57}px`,
          transform: `rotateY(${idx * theta}deg) translateZ(${radius}px)`
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
            width={400}
            height={300}
            alt={card.name}
            className="w-full h-full absolute [backface-visibility:hidden] transition-transform duration-1000 object-cover rounded-md [image-rendering:optimizeQuality]"
            style={{
              transform: cardClick ? "rotateY(180deg)" : "rotateY(0deg)"
            }}
          />
          <CardBack cardClick={cardClick} card={card} />
        </div>
      </div>
    </>
  );
}

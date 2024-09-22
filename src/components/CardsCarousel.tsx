"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Card = {
  category: Array<string>;
  name: string;
  price: string;
  img: string;
};

export default function CardsCarousel() {
  const [cards, setCards] = useState<Card[]>([]);
  const [carouselAngle, setCarouselAngle] = useState(0);
  const [radius, setRadius] = useState(0);
  const width = 210;
  const [theta, setTheta] = useState(0);
  const [cardAngle, setCardAngle] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cards");
        const cardData: Card[] = await response.json();
        if (cardData) {
          setCards(cardData);
          const numCards = cardData.length;
          setRadius(Math.round(width / 2 / Math.tan(Math.PI / numCards)));
          setTheta(360 / numCards);
        }
      } catch (e) {
        console.log("Failed to fetch cards", e);
      }
    };
    fetchCards();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--card-angle",
      `${carouselAngle}deg`
    );
  }, [carouselAngle]);

  // function rotateCarousel() {
  //   "translateZ(" + -radius + "px) " + "rotateY" + "(" + angle + "deg)";
  // }

  const prevHandler = () => {
    setCarouselAngle((prevAngle) => prevAngle + theta);
    setCardAngle((prev) => prev - theta);
  };

  const nextHandler = () => {
    setCarouselAngle((prevAngle) => prevAngle - theta);
    setCardAngle((prev) => prev + theta);
  };
  return (
    <>
      <div
        className={`h-[140px] relative [perspective:900px] [perspective-origin:center_-60%] flex pt-16`}
        style={{ width: width }}
      >
        <div
          className="w-full h-full absolute [transform-style:preserve-3d] duration-500"
          style={{
            transform: `translateZ(${200}px) rotateY(${carouselAngle}deg)`
          }}
        >
          {cards &&
            cards.map((card: Card, idx: number) => (
              <div
                className={`absolute w-[190px] h-[120px] left-[10px] top-[10px] duration-500 border-none rounded-md hover-effect`}
                style={{
                  transform: `rotateY(${
                    idx * theta
                  }deg) translateZ(${radius}px) rotateY(${
                    -idx * theta
                  }deg) rotateY(${cardAngle}deg)`
                }}
                key={card.name}
              >
                <Image
                  src={card.img}
                  width={300}
                  height={300}
                  alt={card.name}
                  className="w-full h-full"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="w-full flex justify-between mt-[400px] px-40">
        <button className="w-20 bg-white" onClick={prevHandler}>
          Previous
        </button>
        <button className="w-20 bg-white" onClick={nextHandler}>
          Next
        </button>
      </div>
    </>
  );
}

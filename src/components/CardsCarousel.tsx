"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

export type TCard = {
  category: Array<string>;
  name: string;
  price: string;
  img: string;
};

export default function CardsCarousel() {
  const [initialCards, setInitialCards] = useState<TCard[]>([]);
  const [cards, setCards] = useState<TCard[]>([]);
  const [carouselAngle, setCarouselAngle] = useState(0);
  const [cardAngle, setCardAngle] = useState(0);
  const [theta, setTheta] = useState(0);
  const [radius, setRadius] = useState(0);
  const [selectedCard, setSelectedCard] = useState(0); //state for enabling flipping card
  const [animationEnable, setAnimationEnable] = useState(true);
  const width = 210;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cards");
        const cardData: TCard[] = await response.json();
        if (cardData) {
          const countCards = cardData.length;
          setInitialCards(cardData);
          setCards(cardData);
          setTheta(360 / countCards);
          setRadius(Math.round(width / 2 / Math.tan(Math.PI / countCards)));
        }
      } catch (e) {
        console.log("Failed to fetch cards", e);
      }
    };
    fetchCards();
  }, []);

  const prevHandler = () => {
    setAnimationEnable(true);
    setCarouselAngle((prevAngle) => prevAngle + theta);
    setCardAngle((prev) => prev - theta);
    setSelectedCard((prevCard) =>
      prevCard - 1 < 0 ? cards.length - 1 : prevCard - 1
    );
  };

  const nextHandler = () => {
    setAnimationEnable(true);
    setCarouselAngle((prevAngle) => prevAngle - theta);
    setCardAngle((prev) => prev + theta);
    setSelectedCard((prevCard) =>
      prevCard + 1 > cards.length - 1 ? 0 : prevCard + 1
    );
  };

  const filterHandler = (e: any) => {
    const filteredCards = initialCards.filter((card) =>
      card.category.includes(e?.target?.innerText)
    );
    const countCards = filteredCards.length;
    setTheta(360 / countCards);
    setRadius(
      countCards === 2 || countCards === 1
        ? width
        : Math.round(width / 2 / Math.tan(Math.PI / countCards))
    );
    setCards(filteredCards);
    console.log(
      countCards,
      360 / countCards,
      Math.round(width / 2 / Math.tan(Math.PI / countCards))
    );
    setAnimationEnable(false);
    setCardAngle(0);
    setCarouselAngle(0);
    setSelectedCard(0);
  };

  const categories = ["Transportation", "Debit", "City Pass"];

  return (
    <>
      <section className="flex justify-between w-[300px] mt-10">
        {categories.map((category) => (
          <button
            className="p-2 bg-[#cf5858] text-white rounded-md"
            onClick={filterHandler}
            key={category}
          >
            {category}
          </button>
        ))}
      </section>
      <div
        className={`relative [perspective:900px] [perspective-origin:center_10%] flex pt-16`}
        style={{ width: width, height: "100px" }}
      >
        <div
          className={`w-full h-full absolute [transform-style:preserve-3d] ${
            animationEnable ? "duration-500" : ""
          }`}
          style={{
            transform: `translateZ(${200}px) rotateY(${carouselAngle}deg)`
          }}
        >
          {cards &&
            cards.map((card: TCard, idx: number) => (
              <Card
                card={card}
                theta={theta}
                cardAngle={cardAngle}
                idx={idx}
                radius={radius}
                key={idx}
                selectedCard={selectedCard}
              />
            ))}
        </div>
      </div>
      <div className="w-[200px] h-[40px] flex justify-between mt-[280px]">
        <button
          className={`w-20 p-1 rounded-md border border-sky-100 bg-[#fafafa] ${
            cards.length === 1 ? "hidden" : ""
          }`}
          onClick={prevHandler}
        >
          Previous
        </button>
        <button
          className={`w-20 p-1 rounded-md border border-sky-100 bg-[#fafafa] ${
            cards.length === 1 ? "hidden" : ""
          }`}
          onClick={nextHandler}
        >
          Next
        </button>
      </div>
    </>
  );
}

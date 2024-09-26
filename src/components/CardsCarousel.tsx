"use client";

import { MouseEvent, useEffect, useState } from "react";
import Card from "./Card";
import { BASE_API_URL } from "../../utils/constants";
import Buttons from "./Buttons";
import Categories from "./Categories";

export type TCard = {
  category: Array<string>;
  name: string;
  price: string;
  img: string;
  website: string;
  availableAt: string;
  funds: string;
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
  const width = 260;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/api/cards`);
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

  const filterHandler = (e: MouseEvent) => {
    const eventTarget = e.target as HTMLElement;
    const filteredCards = initialCards.filter((card) =>
      card.category.includes(eventTarget.innerText)
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

  return (
    <>
      <Categories filterHandler={filterHandler} />
      <div
        className={`relative [perspective:900px] [perspective-origin:center_10%] flex justify-center pt-16`}
        style={{ width: width, height: "500px" }}
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
                width={width}
              />
            ))}
        </div>
        <Buttons
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          cards={cards}
        />
      </div>
    </>
  );
}

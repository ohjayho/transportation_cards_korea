import { promises as fs } from "fs";
import Image from "next/image";

type Card = {
  category: Array<string>;
  name: string;
  price: string;
  img: string;
};

export default async function CardsCarousel() {
  const cardsFile = await fs.readFile(
    process.cwd() + "/public/card_info/card.json",
    "utf8"
  );
  const cards = JSON.parse(cardsFile);
  const numCards = cards.length;
  return (
    <div className="carousel-container">
      <div className="carousel relative w-full h-64">
        {cards.map((card: Card, idx: number) => (
          <div
            className="carousel-item absolute flex flex-col items-center"
            style={{
              transform: `rotateY(${
                idx * (360 / numCards)
              }deg) translateZ(50px) rotateY(${-idx * (360 / numCards)}deg)`
            }}
            key={card.name}
          >
            <h1>{card.name}</h1>
            <h2>{card.price}</h2>
            <Image src={card.img} width={50} height={50} alt={card.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

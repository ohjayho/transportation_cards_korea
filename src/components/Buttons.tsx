import Image from "next/image";
import { TCard } from "./CardsCarousel";

export default function Buttons({
  prevHandler,
  nextHandler,
  cards
}: {
  prevHandler: () => void;
  nextHandler: () => void;
  cards: TCard[];
}) {
  return (
    <>
      <div className="w-[200px] h-[40px] flex justify-between mt-3 max-sm:-mt-2 z-10">
        <button
          className={`w-14 h-14 rounded-full text-white text-2xl bg-neutral-700 border border-gray-800 ${
            cards.length === 1 ? "hidden" : ""
          } flex justify-center items-center`}
          onClick={prevHandler}
        >
          <Image
            src="./btns/left.svg"
            height={500}
            width={500}
            alt="left button"
            className="text-white"
          />
        </button>
        <button
          className={`w-14 h-14 rounded-full text-white text-2xl bg-neutral-700 border border-gray-800 ${
            cards.length === 1 ? "hidden" : ""
          } flex justify-center items-center`}
          onClick={nextHandler}
        >
          <Image
            src="./btns/right.svg"
            height={500}
            width={500}
            alt="right button"
            className="text-white"
          />
        </button>
      </div>
    </>
  );
}

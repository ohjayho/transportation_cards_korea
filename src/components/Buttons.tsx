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
      <div className="w-[200px] h-[40px] flex justify-between mt-[340px] z-10">
        <button
          className={`w-20 p-1 rounded-md text-white bg-[#00347870] ${
            cards.length === 1 ? "hidden" : ""
          }`}
          onClick={prevHandler}
        >
          Previous
        </button>
        <button
          className={`w-20 p-1 rounded-md text-white bg-[#c60c3170] ${
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

import { TCard } from "./CardsCarousel";

export default function CardBack({
  cardClick,
  card
}: {
  cardClick: boolean;
  card: TCard;
}) {
  return (
    <>
      <div
        className={`w-full h-full bg-white rounded-md transition-all duration-1000 [backface-visibility:hidden] p-1`}
        style={{
          transform: cardClick ? "rotateY(0deg)" : "rotateY(-180deg)"
        }}
      >
        <div className="h-full border border-black rounded-md flex flex-col justify-between text-[10px] p-2">
          <div>
            <span className="w-[60%] text-[12px] mb-1">{card.name}</span>
            <div className="flex mb-1 max-sm:mb-0">
              {card.category.map((category) => (
                <span
                  className="flex justify-center items-center text-[8px] bg-red-400 px-1 rounded-sm text-white mr-2 last:mr-0 max-sm:text-[7px]"
                  key={category}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="max-sm:text-[7px] text-[8px]">Purchase: </span>
            <span className="max-sm:text-[7px]">{card.availableAt}</span>
          </div>
          <div>
            <span className="max-sm:text-[7px] text-[8px]">Charge: </span>
            <span className="max-sm:text-[7px]">{card.funds}</span>
          </div>
          <div>
            <span className="max-sm:text-[7px] text-[8px]">Price: </span>
            <span className="max-sm:text-[7px]">{card.price}</span>
          </div>
          <div className="self-end">
            <a
              href={card.website}
              target="_blank"
              className="text-red-500 max-sm:text-[8px]"
              onClick={(e) => e.stopPropagation()}
            >
              More info
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

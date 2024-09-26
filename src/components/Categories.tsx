import { MouseEvent } from "react";

export default function Categories({
  filterHandler
}: {
  filterHandler: (e: MouseEvent) => void;
}) {
  const categories = [
    ["Transportation", "#00347870"],
    ["Debit", "#29737370"],
    ["City Pass", "#c60c3170"]
  ];
  return (
    <>
      <div className="flex justify-between w-[300px] mt-10 text-white">
        {categories.map((category) => (
          <button
            className="p-2 rounded-md"
            style={{ backgroundColor: category[1] }}
            onClick={filterHandler}
            key={category[0]}
          >
            {category[0]}
          </button>
        ))}
      </div>
    </>
  );
}

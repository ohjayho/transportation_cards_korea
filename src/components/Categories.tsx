import { MouseEvent } from "react";

export default function Categories({
  filterHandler
}: {
  filterHandler: (e: MouseEvent) => void;
}) {
  const categories = [
    ["Transportation", "red"],
    ["Debit", "green"],
    ["City Pass", "blue"],
    ["Discounts", "purple"]
  ];
  return (
    <>
      <div className="flex justify-between w-[500px] mt-10">
        {categories.map((category) => (
          <button
            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-xl text-md font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
            onClick={filterHandler}
            key={category[0]}
          >
            <span
              className="size-1.5 inline-block rounded-full "
              style={{ backgroundColor: category[1] }}
            ></span>
            {category[0]}
          </button>
        ))}
      </div>
    </>
  );
}

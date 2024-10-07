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
      <div className="flex justify-between mt-10 max-sm:px-4 gap-2.5">
        {categories.map((category) => (
          <button
            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 max-sm:px-1.5 rounded-xl text-md font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white max-sm:text-xs"
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

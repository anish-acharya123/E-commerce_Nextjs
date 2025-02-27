"use client";

import FoodData from "@/app/_data/foods.json";
import Link from "next/link";
import { usePathname, redirect } from "next/navigation";
import { ChangeEvent } from "react";

export default function Filter() {
  const allCategory = [...new Set(FoodData.map((item) => item.category))];
  const pathname = usePathname().split("/")[1];

  return (
    <div className="w-1/6 py-10 lg:block hidden ">
      <div className="bg-gray-200 p-2">
        <button className="w-full text-left">Select Category</button>
        <hr className="border-gray-500 my-2" />
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out
          `}
        >
          <div className="space-y-1">
            {allCategory.map((item, index) => (
              <p key={index}>
                <Link
                  className={`${
                    item == pathname && "text-primary underline"
                  } capitalize`}
                  href={`/${item}`}
                >
                  {item}
                </Link>
              </p>
            ))}
            {/* <hr className="border-gray-500 my-2" /> */}
          </div>
        </div>
        {/* <button className="w-full text-left">Select Price</button> */}
      </div>
    </div>
  );
}

export const FilterByDropDown = () => {
  const allCategory = [...new Set(FoodData.map((item) => item.category))];
  const pathname = usePathname().split("/")[1];

  const handleredirect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    redirect(`/${selectedCategory}`);
  };

  return (
    <div>
      <select
        name=""
        id=""
        className=" border-2 px-2 py-1 capitalize"
        onChange={handleredirect}
        value={pathname}
      >
        {allCategory.map((item, index) => (
          <option
            key={index}
            value={item}
            className={`${
              item == pathname && "text-primary underline"
            } capitalize cursor-pointer`}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

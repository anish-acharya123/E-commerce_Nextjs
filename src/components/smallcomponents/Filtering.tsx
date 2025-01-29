"use client";

import FoodData from "@/app/_data/foods.json";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Filter() {
  const allCategory = [...new Set(FoodData.map((item) => item.category))];
  const [categoryOpen, setCategoryOpen] = useState(false);
  const pathname = usePathname().split("/")[1];

  return (
    <div className="w-1/6 py-10 ">
      <div className="bg-gray-200 p-2">
        <button
          className="w-full text-left"
          onClick={() => setCategoryOpen(!categoryOpen)}
        >
          Select Category
        </button>
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

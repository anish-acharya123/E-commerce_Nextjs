"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import StarRating from "../ui/Startrating";
import { EachdataProps } from "./EachItem";
import { CartContext } from "@/context/Cartcontext";
import { useContext, useState } from "react";

export default function EachProductDetail({
  product,
}: {
  product: EachdataProps;
}) {
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(1);

  return (
    <div>
      <section className="space-y-2 py-4">
        <h1 className="md:text-4xl text-2xl font-semibold ">{product.title}</h1>
        <div className="flex">
          <StarRating rating={product.rating} />
          <p className="text-gray-500 ml-1 sm:text-base text-xs">{`(${product.no_of_rating_people} Reviews)`}</p>
          <span className="mx-2 text-sm md:text-base"> | </span>
          <p className="text-sm md:text-base">
            {product.available_count > 0 ? (
              <span className="text-primary font-semibold">In Stock</span>
            ) : (
              <span className="text-red-500">Out of Stock</span>
            )}
          </p>
        </div>
        <p className="text-2xl text-primary">Rs. {product.price}.00</p>
        <p className="">{product.desc}</p>
      </section>
      <hr className="border-gray-400" />
      <section className="py-4 flex gap-4 items-center ">
        <div className="flex gap-8 border-black border w-40 items-center  overflow-hidden rounded-md">
          <button
            className="border-r px-4 py-2 w-1/4 text-white bg-primary"
            onClick={() => setCount(count - 1)}
            disabled={count == 0}
          >
            -
          </button>
          <p className="w-2/4">{count}</p>
          <button
            className="border-l w-1/4 px-4 py-2 text-white bg-primary disabled:bg-gray-200"
            onClick={() => setCount(count + 1)}
            disabled={count === product.available_count}
          >
            +
          </button>
        </div>

        <button
          className="bg-primary py-2 px-4 rounded-md text-white"
          onClick={() => addItem({ ...product, quantity: count })}
        >
          Add to Cart
        </button>
        <button className=" py-2 px-4 rounded-md border border-gray-500">
          <Icon icon={"solar:heart-outline"} className="text-2xl" />
        </button>
      </section>
      <section className=" pt- ">
        <div className="border border-black  rounded-md py-8 h-full flex flex-col gap-4">
          <div className="flex items-center px-4 gap-10">
            <Icon icon={"iconamoon:delivery"} className="text-3xl" />
            <div>
              <p>FREE AND FAST DELIVERY</p>
              <p className="text-sm">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="flex items-center px-4 gap-10 border-t  border-black py-2">
            <Icon icon={"ri:customer-service-line"} className="text-3xl" />
            <div>
              <p>24/7 CUSTOMER SERVICES</p>
              <p className="text-sm">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

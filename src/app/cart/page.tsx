"use client";

import Wrapper from "@/components/layouts/Wrapper";
import { CartContext } from "@/context/Cartcontext";
import Image from "next/image";
import { useContext } from "react";

export default function Cart() {
  const { addItem, items, removeItem, totalAmount } = useContext(CartContext);

  //   console.log(items);
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="py-20">
      <Wrapper>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left text-primary">
              <th className="p-3">Food</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Subtotal</th>
            </tr>
          </thead>
          <tbody className="">
            {items.map((item) => (
              <tr key={item.id} className="border-b ">
                <td className="p-3 flex items-center space-x-3">
                  <figure className="relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={200}
                      width={200}
                      className="w-10 h-10 rounded"
                    />
                    <button
                      className="absolute top-[-10px] right-[-10px] text-white bg-red-500 rounded-full px-2"
                      onClick={() => removeItem(item.id)}
                    >
                      -
                    </button>
                  </figure>
                  <span>{item.title}</span>
                </td>
                <td className="p-3">Rs. {item.price}</td>
                <td className="p-3 flex items-center  gap-2   w-32 justify-between">
                  <button
                    className="bg-gray-200 w-[25%] px-2 py-1 rounded-md disabled:bg-gray-400"
                    onClick={() => addItem({ ...item, quantity: -1 })}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className=" bg-button w-[50%] text-center text-white px-3 py-1 rounded-md">
                    {item.quantity}
                  </span>
                  <button
                    className="bg-gray-200 px-2 py-1 w-[25%] rounded-md"
                    onClick={() => addItem({ ...item, quantity: 1 })}
                    // disabled = {}
                  >
                    +
                  </button>
                </td>
                <td className="p-3">Rs. {item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Cart Summary */}
        <div className="pb-20 float-right">
          <div className="mt-6 border p-4 w-64 ">
            <h2 className="text-lg font-semibold mb-3">Cart Total</h2>
            <div className="flex justify-between border-b pb-2">
              <span>Subtotal:</span>
              <span>Rs.{subtotal}</span>
            </div>
            <div className="flex justify-between border-b pb-2 mt-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-2">
              <span>Total:</span>
              <span>Rs.{totalAmount}</span>
            </div>
            <button className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-secondary">
              Process to Checkout
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

import React from "react";
import { useFormContext } from "react-hook-form";
import { CheckoutSchemaType } from "@/schema/Checkout.schema";

const Form = () => {
  const { register, formState } = useFormContext<CheckoutSchemaType>();
  const { errors } = formState;

  return (
    <div className="flex-1 bg-green-50 rounded-md">
      <form action="">
        <div className="flex flex-col gap-4 p-5">
          <h1 className="text-xl font-semibold">Delivery Information</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register("firstName", { required: "Name is required" })}
              className={`border rounded-md p-2 ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              {...register("address", { required: "Address is required" })}
              className={`border rounded-md p-2 ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>
          {/* Add more fields as needed */}
        </div>
      </form>
    </div>
  );
};

export default Form;

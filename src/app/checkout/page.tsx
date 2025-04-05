"use client";

import Wrapper from "@/components/layouts/Wrapper";
import { CartContext } from "@/context/Cartcontext";
import { CheckoutSchemaType } from "@/schema/Checkout.schema";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Form from "./Form";
import Checkoutdetail from "./Checkoutdetail";

const Checkoutpage = () => {
  const methods = useForm<CheckoutSchemaType>();
  return (
    <section className="py-10">
      <Wrapper>
        <div className="space-y-10">
          <div className="text-center">
            <h1 className=" text-3xl font-semibold ">
              Check out <span className="text-primary">Details</span>
            </h1>
            <p>Complete your order by providing your delivery information</p>
          </div>
          <div className="container mx-auto flex flex-col lg:flex-row gap-10">
            <FormProvider {...methods}>
              <Form />
              <Checkoutdetail />
            </FormProvider>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Checkoutpage;

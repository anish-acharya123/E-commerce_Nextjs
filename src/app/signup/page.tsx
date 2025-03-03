"use client";
import Wrapper from "@/components/layouts/Wrapper";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { assets } from "../../../public/assets";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UserSignupSchema,
  UserSignupSchemaType,
} from "@/schema/UserForm.schema";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import useUserSignup from "@/components/hooks/useUser";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignupSchemaType>({
    resolver: zodResolver(UserSignupSchema),
  });

  const { mutate } = useUserSignup();

  const onSubmit = async (data: UserSignupSchemaType) => {
    mutate(data);
  };

  return (
    <section className="md:py-16 py-8">
      <Wrapper>
        <div className="flex flex-col justify-center md:space-y-10 space-y-4  items-center">
          <div className="text-left w-full">Home {">>"} Signup</div>
          <div className="text-center mb-4 w-full">
            <h1 className="md:text-5xl text-4xl font-bold  ">
              Create an <span className="text-secondary">account </span>
            </h1>
          </div>
          <div className="  rounded-md flex justify-center  items-center   overflow-hidden gap-10 w-full">
            <section className="md:flex-1 hidden md:block    ">
              <Image
                src={assets.signup.src}
                alt={assets.signup.alt}
                width={1000}
                height={1000}
                className="lg:h-[35rem] h-[35rem] w-full"
              />
            </section>
            <section className="flex-1  lg:py-0 md:py-6 py-10 space-y-3 pr-8 px-6 md:px-4 ">
              <form onSubmit={handleSubmit(onSubmit)} className=" space-y-8 ">
                <div className="space-y-2">
                  <label htmlFor="fullname">Full Name</label> <br />
                  <input
                    type="text"
                    id="fullname"
                    className="w-full bg-none focus:outline-none bg-transparent border-b-2 border-gray-400"
                    placeholder="eg: John Doe"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-none focus:outline-none bg-transparent border-b-2 border-gray-400"
                    placeholder="eg: xxx@gmail.com "
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="password">Password</label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    className="w-full bg-none focus:outline-none bg-transparent border-b-2 border-gray-400"
                    placeholder="eg: hello-world"
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="cpassword">Confirm Password</label>
                  <br />
                  <input
                    type="password"
                    id="cpassword"
                    className="w-full bg-none focus:outline-none bg-transparent border-b-2 border-gray-400"
                    placeholder="eg: hello-world"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-primary w-full hover:bg-secondary px-4 py-3 rounded-md text-white"
                >
                  Sign Up
                </button>
              </form>
              <div className="flex gap-10  justify-center">
                <p className="">
                  Already have account?{" "}
                  <Link
                    href="/login"
                    className="text-primary-light underline hover:text-secondary transition-colors duration-300"
                  >
                    Login
                  </Link>
                </p>
              </div>

              <p className=" text-center ">Or</p>
              <div>
                <div className="flex gap-4 w-full ">
                  <button className="border-2 border-gray-400 rounded-md p-2 w-1/2 space-x-2">
                    <span className="text-sm md:text-base">SignUp with</span>
                    <Icon
                      icon="flat-color-icons:google"
                      className="text-2xl inline"
                    />
                  </button>
                  <button className="border-2 border-gray-400 rounded-md p-2 w-1/2 space-x-2">
                    <span className="text-sm md:text-base">SignUp with</span>
                    <Icon icon="logos:facebook" className="text-2xl inline" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Signup;

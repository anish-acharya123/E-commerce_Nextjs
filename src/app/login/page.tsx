"use client";

import Wrapper from "@/components/layouts/Wrapper";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoginSchema, UserLoginSchemaType } from "@/schema/UserForm.schema";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/profile"); // Redirect to profile page if logged in
    }
  }, [status, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginSchemaType>({
    resolver: zodResolver(UserLoginSchema),
  });

  const onSubmit = async (data: UserLoginSchemaType) => {
    const res = await signIn("credentials", {
      redirect: true,
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Logged in successfully!");
      router.push("/profile");
    }
  };

  if (status === "loading") return <p>Loading...</p>;
  return (
    <section className="min-h-screen  pt-16 ">
      <Wrapper>
        <div className="flex flex-col justify-center md:space-y-10 space-y-4  items-center">
          {/* <div className="text-left w-full">Home {">>"} Signup</div> */}
          <div className="text-center mb-4 w-full">
            <h1 className="md:text-5xl text-4xl font-bold  ">
              Login <span className="text-secondary">account </span>
            </h1>
          </div>
          <div className="  rounded-md flex justify-center   items-center   overflow-hidden gap-10 w-full">
            <section className="flex- min-w-[40%]  shadow-xl rounded-md   border-2  lg:py-10 md:py-6 py-10 space-y-3 pr-8 px-6 md:px-6 ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" space-y-8  md:text-xl"
              >
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

                <button
                  type="submit"
                  className="bg-primary w-full hover:bg-secondary px-4 py-3 rounded-md text-white"
                >
                  Login
                </button>
              </form>
              <div className="flex gap-10  justify-center">
                <p className="">
                  New here? Create your account{"  "}
                  <Link
                    href="/signup"
                    className="text-primary-light underline hover:text-secondary transition-colors duration-300"
                  >
                    Signup
                  </Link>
                </p>
              </div>

              <p className=" text-center ">Or</p>
              <div>
                <div className="flex gap-4 w-full ">
                  <button
                    className="border-2 border-gray-400 rounded-md p-2 w-1/2 space-x-2"
                    onClick={() => signIn("google")}
                  >
                    <span className="text-sm md:text-base">Login with</span>
                    <Icon
                      icon="flat-color-icons:google"
                      className="text-2xl inline"
                    />
                  </button>
                  <button className="border-2 border-gray-400 rounded-md p-2 w-1/2 space-x-2">
                    <span className="text-sm md:text-base">Login with</span>
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

export default Login;

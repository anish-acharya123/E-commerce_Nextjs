"use client";
import Link from "next/link";
import React, { ComponentProps, useState } from "react";
import { usePathname } from "next/navigation";
import { NavListConstant } from "@/constants/NavConstant";
import { Icon } from "@iconify/react/dist/iconify.js";

export function Nav({ children }: { children: React.ReactNode }) {
  return (
    <nav className="py-4 z-10 bg-white  shadow-md sticky top-0 text-lg ">
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (  
    <Link
      {...props}
      className={`font-medium ${
        pathname === props.href && "underline underline-offset-4"
      }`}
    />
  );
}

export function NavItems() {
  return (
    <>
      {NavListConstant.map((item) => (
        <NavLink href={item.path} key={item.id}>
          <span className=" hover:underline hover:underline-offset-4  md:hover:text-primary-light transition-colors duration-500 ">
            {item.label}
          </span>
        </NavLink>
      ))}
    </>
  );
}

export function NavLogAndSign() {
  return (
    <>
      <Link href={"/login"}>
        <span className=" md:border-primary-light  md:border md:px-4 md:py-2 md:hover:text-primary-light rounded-md transition-colors duration-300 border px-6  py-2">
          Login
        </span>
      </Link>
      <Link href={"/signup"}>
        <span className=" md:border md:px-4 md:py-2 md:bg-primary-light md:text-white md:hover:text-primary-light rounded-md md:border-primary-light md:hover:bg-white transition-colors duration-300 border bg-white text-primary-light px-5 py-2">
          Signup
        </span>
      </Link>
    </>
  );
}

// for mobile
export function NavHamburger() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="">
        {!open && <Icon icon="quill:hamburger-sidebar" className="text-4xl" />}
      </button>

      {/* after open */}
      <div
        className={`fixed top-0   w-[300px] text-white right-0  text-left transition-all duration-300 ease-in-out  h-screen py-4 pr-14 sm:pr-20 pl-8 sm:pl-10 bg-primary-light space-y-10 ${
          open ? "translate-x-0  opacity-100" : "translate-x-full  opacity-0  "
        }`}
      >
        <button onClick={() => setOpen(!open)} className="  ">
          <Icon icon="radix-icons:cross-2" className="text-4xl text-white " />
        </button>
        <div className=" space-y-8 pt-10">
          <span className="flex flex-col gap-4">
            <NavItems />
          </span>
          <span className="flex flex-col gap-8">
            <NavLogAndSign />
          </span>
        </div>
      </div>
    </>
  );
}

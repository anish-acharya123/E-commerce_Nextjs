"use client";
import Link from "next/link";
import React, { ComponentProps, useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { NavListConstant } from "@/constants/NavConstant";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CartContext } from "@/context/Cartcontext";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export function Nav({ children }: { children: React.ReactNode }) {
  return (
    <nav className="md:py-6 py-4 z-50 bg-white  shadow-md sticky top-0 text-lg ">
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={`font-medium  text-white   md:text-black ${
        pathname === props.href &&
        "underline underline-offset-4 md:text-primary "
      }`}
    />
  );
}

export function NavItems() {
  return (
    <>
      {NavListConstant.map((item) => (
        <NavLink href={item.path} key={item.id}>
          <span className=" hover:underline hover:underline-offset-4  md:hover:text-primarytransition-colors duration-500 ">
            {item.label}
          </span>
        </NavLink>
      ))}
    </>
  );
}

export function SearchAndCard() {
  const { data: session } = useSession();
  const [search, setSearch] = useState("");
  const { items } = useContext(CartContext);
  const len = items.length;
  return (
    <>
      <div className="py-1 px-3 bg-gray-200 rounded-sm outline-none flex justify-center items-center ">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="What are you looking for?"
          className="bg-gray-200 outline-none"
        />
        <Icon icon={"lucide:search"} className="text-xl" />
      </div>

      <Link href={"/wishlist"}>
        <Icon icon={"solar:heart-outline"} className="text-3xl" />
      </Link>

      <Link href={"/cart"} className="relative">
        <Icon icon={"cil:cart"} className="text-3xl" />
        <p className="absolute top-[-10px] right-[-10px] bg-primary text-sm text-white rounded-full px-2">
          {len}
        </p>
      </Link>
      <div>
        {session ? (
          <div className="flex items-center gap-4">
            <Link href="/profile">
              <Image
                width={32}
                height={32}
                src={session.user?.image || "/default-avatar.png"}
                alt="User"
                className="w-8 h-8 rounded-full"
              />
            </Link>
            <button
              onClick={() => signOut()}
              className="px-3 py-1 bg-red-600 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4 ">
            {/* <Link href="/profile">
              <Icon icon="iconamoon:profile" className="text-4xl" />
            </Link> */}
            <Link
              href="/login"
              className="px-3 py-1 bg-primary hover:bg-secondary text-white rounded"
            >
              <Icon icon="material-symbols-light:login" className="text-4xl" />
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

const ProfilePopup = () => {
  const { data: session } = useSession();
  return (
    <div className="fixed top-0 right-0 bg-white w-[300px] h-screen shadow-lg p-4">
      {session && (
        <>
          <div className="flex items-center gap-4">
            <Image
              width={32}
              height={32}
              src={session.user?.image || "/default-avatar.png"}
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <p>{session.user?.name}</p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/profile">Profile</Link>
            <Link href="/wishlist">Wishlist</Link>
            <Link href="/orders">Orders</Link>
            <button onClick={() => signOut()}>Logout</button>
          </div>
        </>
      )}
    </div>
  );
};

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
        className={`fixed top-0 bg-primary  w-[300px] text-white right-0  text-left transition-all duration-300 ease-in-out  h-screen py-4 pr-14 sm:pr-20 pl-8 sm:pl-10 bg-primary-light space-y-10 ${
          open ? "translate-x-0  opacity-100" : "translate-x-full  opacity-0  "
        }`}
      >
        <button onClick={() => setOpen(!open)} className="  ">
          <Icon icon="radix-icons:cross-2" className="text-3xl text-white " />
        </button>
        <div className=" space-y-8 pt-10 bg-red- flex flex-col justify-center items-center">
          <span className="flex flex-col gap-4">
            <NavItems />
          </span>
          {/* <span className="flex flex-col gap-4">
            <NavLogAndSign />
          </span> */}
        </div>
      </div>
    </>
  );
}

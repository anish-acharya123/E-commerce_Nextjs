"use client";
import Link from "next/link";
import React, {
  ComponentProps,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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

  const [open, setOpen] = useState<boolean>(false);

  const { items } = useContext(CartContext);
  const len = items.length;

  const divRef = useRef<HTMLDivElement | null>(null); // Reference for the div

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
      <div className="relative">
        {session ? (
          <div className="flex items-center gap-4" ref={divRef}>
            <button
              onClick={() => setOpen(!open)}
              className="p-1 bg-white rounded-full border-2 border-black "
            >
              <Image
                width={32}
                height={32}
                src={session.user?.image || "/default-avatar.png"}
                alt="User"
                className="w-8 h-8 rounded-full"
              />
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

        {open && <ProfilePopup />}
      </div>
    </>
  );
}

const ProfilePopup = () => {
  const { data: session } = useSession();
  return (
    <div className="absolute bg-white w-[250px] -translate-x-52 translate-y-7 border-2   left-0 shadow-xl p-4">
      {session && (
        <>
          <div className="flex items-center gap-4 py-2 bg-gray-200 px-2 rounded-md text-black">
            <Image
              width={32}
              height={32}
              src={session.user?.image || "/default-avatar.png"}
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-primary font-medium">{session.user?.name}</p>
          </div>
          <div className="flex flex-col gap-4 pt-2 group">
            <Link
              href="/profile"
              className="border-b hover:bg-primary hover:text-white px-2 rounded-md py-1"
            >
              Profile
            </Link>
            <Link
              href="/wishlist"
              className="border-b hover:bg-primary hover:text-white px-2 rounded-md py-1 "
            >
              Wishlist
            </Link>
            <Link
              href="/orders"
              className="border-b hover:bg-primary hover:text-white px-2 rounded-md py-1"
            >
              Orders
            </Link>
            <button
              onClick={() => signOut()}
              className="mt-4 px-4 py-2 bg-red-600 rounded-md text-white"
            >
              Logout
            </button>
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

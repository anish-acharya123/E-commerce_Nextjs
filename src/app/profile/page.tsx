"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  console.log(session, status);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return <p>You are not logged in.</p>;

  return (
    <div className=" md:py-44 py-10  flex justify-center items-center ">
      <div className="bg-white w-fit border-2 p-8 rounded-md shadow-md flex flex-col items-center justify-center">
        <h1 className=" font-semibold text-3xl">Profile</h1>
        <Image
          src={session?.user?.image || "/default-avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full mt-4"
          width={100}
          height={100}
        />
        <p className="mt-2">Name: {session?.user?.name}</p>
        <p>Email: {session?.user?.email}</p>
        <button
          onClick={() => signOut()}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

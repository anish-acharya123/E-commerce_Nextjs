import Link from "next/link";

export default function Notfound() {
  return (
    <div className="py-48 flex items-center justify-center flex-col gap-4">
      <h1 className="text-6xl font-semibold">404 PAGE NOT FOUND</h1>
      <Link href={"/"} className="text-primary bg-gray-300 px-4 py-2"> Back to Home</Link>
    </div>
  );
}

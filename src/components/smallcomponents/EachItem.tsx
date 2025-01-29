import Image from "next/image";
import Link from "next/link";
import StarRating from "../ui/Startrating";
import GridComponent from "../layouts/ReusedComponent";
// import { Icon } from "@iconify/react/dist/iconify.js";

export type EachdataProps = {
  id: number;
  title: string;
  desc: string;
  available_count: number;
  image: string;
  category: string;
  rating: number;
  no_of_rating_people: number;
  price: number;
};

export default function EachItem({ data }: { data: EachdataProps[] }) {
  return (
    <GridComponent>
      {data.map((item) => (
        <Link
          href={`/${item.category}/${item.id}`}
          key={item.id}
          className="space-y-2  hover:bg-gray-100 transition-colors duration-500 rounded-bl-md rounded-br-md "
        >
          <div className="bg-gray-200 relative py-10 overflow-hidden flex  items-center justify-center rounded-md">
            <Image
              src={item.image}
              alt={item.title}
              height={200}
              width={200}
              className="h-32 w-32"
            />
            <div className=" opacity-0 bg-gray-400 hover:opacity-90 duration-500 absolute inset-0 z-10 flex justify-center items-center  text-white ">
              <button className="px-16 py-2 bg-white  text-primary">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="space-y-2  pb-4">
            <p className="font-medium pt-2 px-1 w-full">{item.title}</p>
            <p className="font-medium px-1 w-full text-primary">
              Rs. {item.price}
            </p>
            <div className="flex">
              <StarRating rating={item.rating} />
              <p className="text-gray-500 ml-1">{`(${item.no_of_rating_people})`}</p>
            </div>
          </div>
        </Link>
      ))}
    </GridComponent>
  );
}

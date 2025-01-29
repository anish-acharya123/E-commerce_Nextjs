import Image from "next/image";
import Link from "next/link";
import StarRating from "../ui/Startrating";
import GridComponent from "../layouts/ReusedComponent";

type EachdataProps = {
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
        <div key={item.id} className="space-y-2">
          <Link
            href={`/${item.category}/food${item.id}`}
            className="bg-gray-200 py-10 flex items-center justify-center rounded-md"
          >
            <Image
              src={item.image}
              alt={item.title}
              height={200}
              width={200}
              className="h-32 w-32"
            />
          </Link>
          <p className="font-medium pt-2 px-1 w-full">{item.title}</p>
          <p className="font-medium px-1 w-full text-primary">Rs. {item.price}</p>
          <div className="flex">
            <StarRating rating={item.rating} />
            <p className="text-gray-500 ml-1">{`(${item.no_of_rating_people})`}</p>
          </div>
        </div>
      ))}
    </GridComponent>
  );
}

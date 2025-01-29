import Link from "next/link";
import Wrapper from "./layouts/Wrapper";
import foodData from "@/app/_data/foods.json";
import Image from "next/image";
import StarRating from "./ui/Startrating";

export default function Todays() {
  //   let todayFood = foodData.sort()
  return (
    <section className=" py-10">
      <Wrapper>
        <div className="flex items-center  gap-3">
          <span className="w-6 h-14 bg-primary"></span>
          <p className="text-2xl font-bold text-primary  ">Today{"'"}s</p>
        </div>

        <div className="py-10  grid grid-cols-5 gap-10 content-center w-full ">
          {foodData.slice(5, 10).map((item) => (
            <div key={item.id}>
              <Link
                href={`/${item.category}/food${item.id}`}
                className="bg-gray-200 p-6 flex items-center justify-center rounded-md"
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
              <div className="flex">
                <StarRating rating={item.rating} />
                <p className="text-gray-500 ml-1">{`(${item.no_of_rating_people})`}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-button px-8 py-2 rounded-md text-white hover:bg-primary  transition-colors duration-300 text-center">
            <Link href={"/category/allfoods"}> View all Foods</Link>
          </button>
        </div>
      </Wrapper>
    </section>
  );
}

import Link from "next/link";
import Wrapper from "./layouts/Wrapper";
import EachItem from "./smallcomponents/EachItem";
import foodData from "@/app/_data/foods.json";

export default function OurFood() {
  return (
    <div className="py-10">
      <Wrapper>
        <div className="flex justify-between">
          <div className="flex items-center  gap-3">
            <span className="w-6 h-14 bg-primary"></span>
            <p className="text-2xl font-bold text-primary  ">Our Food</p>
          </div>
          <button className="bg-button px-8  rounded-md text-white hover:bg-primary  transition-colors duration-300 text-center">
            <Link href={"/category/allfoods"}> View all</Link>
          </button>
        </div>
        <EachItem data={foodData.slice(0, 10)} />
      </Wrapper>
    </div>
  );
}

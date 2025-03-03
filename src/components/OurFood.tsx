import Link from "next/link";
import Wrapper from "./layouts/Wrapper";
import EachItem from "./sections/EachItem";
import foodData from "@/app/_data/foods.json";
import Title from "./sections/Title";

export default function OurFood() {
  return (
    <div className="py-10">
      <Wrapper>
        <div className="flex justify-between">
          <Title text="Our Food" />
          <button className="bg-button px-8  rounded-md text-white hover:bg-primary  transition-colors duration-300 text-center">
            <Link href={"/category/allfoods"}> View all</Link>
          </button>
        </div>
        <EachItem data={foodData.slice(0, 10)} />
      </Wrapper>
    </div>
  );
}

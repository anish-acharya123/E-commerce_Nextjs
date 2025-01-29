import Link from "next/link";
import Wrapper from "./layouts/Wrapper";
import foodData from "@/app/_data/foods.json";
import EachItem from "./smallcomponents/EachItem";

export default function Todays() {
  return (
    <section className=" py-10">
      <Wrapper>
        <div className="flex items-center  gap-3">
          <span className="w-6 h-14 bg-primary"></span>
          <p className="text-2xl font-bold text-primary  ">Today{"'"}s</p>
        </div>

        <EachItem data={foodData.slice(10, 15)} />
        <div className="text-center">
          <button className="bg-button px-8 py-2 rounded-md text-white hover:bg-primary  transition-colors duration-300 text-center">
            <Link href={"/category/allfoods"}> View all Foods</Link>
          </button>
        </div>

        <hr className="mt-10 " />
      </Wrapper>
    </section>
  );
}

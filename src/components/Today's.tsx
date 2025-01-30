import Link from "next/link";
import Wrapper from "./layouts/Wrapper";
import foodData from "@/app/_data/foods.json";
import EachItem from "./smallcomponents/EachItem";
import Title from "./smallcomponents/Title";

export default function Todays() {
  return (
    <section className=" py-10">
      <Wrapper>
        <Title text="Today's" />

        <EachItem data={foodData.slice(10, 15)} />
        <div className="text-center">
          <Link href={"/allfoods"}>
            <button className="bg-button px-8 py-2 rounded-md text-white hover:bg-primary  transition-colors duration-300 text-center">
              View all Foods
            </button>
          </Link>
        </div>

        <hr className="mt-10 " />
      </Wrapper>
    </section>
  );
}

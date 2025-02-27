import Wrapper from "@/components/layouts/Wrapper";
import foodData from "@/app/_data/foods.json";
import EachItem from "@/components/smallcomponents/EachItem";
import Link from "next/link";
import Filter, {
  FilterByDropDown,
} from "@/components/smallcomponents/Filtering";
import { notFound } from "next/navigation";

export default async function Category({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  let categoryFood;
  if (category.toLowerCase() !== "allfoods") {
    categoryFood = foodData.filter(
      (item) => item.category.toLowerCase() == category.toLowerCase()
    );
  } else {
    categoryFood = foodData;
  }

  if (categoryFood.length == 0) {
    notFound();
  }
  return (
    <section className="py-10">
      <Wrapper>
        <div className="inline">
          <Link href={"/"} className="hover:underline hover:underline-offset-4">
            Home
          </Link>{" "}
          / <span className="text-primary">{category}</span>
        </div>
        <div className="lg:block flex justify-between pt-4">
          <h1 className="lg:text-center  md:text-2xl text-xl font-semibold">
            {" "}
            Pick Your Favourite
            <span className="text-primary  capitalize">
              {" "}
              {` ${category}`}
            </span>{" "}
          </h1>
          <div className="lg:hidden block">
            <FilterByDropDown />
          </div>
        </div>
        <div className="flex gap-4">
          {/* <div className="w-48 py-10">hello anish</div> */}
          <Filter />
          <EachItem data={categoryFood} />
        </div>
      </Wrapper>
    </section>
  );
}

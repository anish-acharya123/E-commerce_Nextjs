import { CategoryConst } from "@/constants/CategoryConstant";
import GridComponent from "./layouts/ReusedComponent";
import Wrapper from "./layouts/Wrapper";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Title from "./smallcomponents/Title";

export default function Category() {
  return (
    <div>
      <Wrapper>
      <Title text="Category" />

        <h2 className="text-3xl font-semibold pt-6">Browse By Category</h2>
        <GridComponent>
          {CategoryConst.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="border-2 rounded-md py-12 flex gap-4 items-center justify-center flex-col"
            >
              <Icon icon={item.icon} className="text-5xl" />
              <p className="font-semibold">{item.title}</p>
            </Link>
          ))}
        </GridComponent>

        <hr className="mt-10 " />
      </Wrapper>
    </div>
  );
}

import Wrapper from "@/components/layouts/Wrapper";
// import StarRating from "@/components/ui/Startrating";
import foods from "@/app/_data/foods.json";
import Image from "next/image";
import EachProductDetail from "@/components/smallcomponents/EachProductDetail";
import Todays from "@/components/Today's";
import { notFound } from "next/navigation";

export default async function EachProduct({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = foods.find((food) => food.id.toLocaleString() === productId);

  if (!product) {
    notFound();
  }

  return (
    <section className="md:py-12 py-6">
      <Wrapper>
        <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-10 gap-4">
          <div className="bg-gray-200 flex-1 h-full w-full rounded-md flex items-center justify-center py-32">
            <Image
              src={product.image}
              alt={product.title}
              height={500}
              width={500}
              className="w-auto lg:h-52 h-32 scale-150 "
            />
          </div>
          <div className="flex-1">
            <EachProductDetail product={product} />
          </div>
        </div>
      </Wrapper>
      <Todays />
    </section>
  );
}

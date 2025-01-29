import Wrapper from "@/components/layouts/Wrapper";
import StarRating from "@/components/ui/Startrating";
import foods from "@/app/_data/foods.json";
import Image from "next/image";
import EachProductDetail from "@/components/smallcomponents/EachProductDetail";
import Todays from "@/components/Today's";

export default async function EachProduct({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = foods.find((food) => food.id.toLocaleString() === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  // const [count, setCount] = useState(1);

  // const incrementCount = () => setCount(count + 1);
  // const decrementCount = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <section className="py-12">
      <Wrapper>
        <div className="flex  justify-center gap-10">
          <div className="bg-gray-200 flex-1 rounded-md flex items-center justify-center py-32">
            <Image
              src={product.image}
              alt={product.title}
              height={500}
              width={500}
              className="w-auto h-52 scale-150"
            />
          </div>
          <div className="flex-1">
            <EachProductDetail product={product} />
          </div>
        </div>
        <Todays />
      </Wrapper>
    </section>
  );
}

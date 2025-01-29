import Wrapper from "@/components/layouts/Wrapper";

export default async function EachProduct({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  // console.log(productId);
  return (
    <section className="py-10">
      <Wrapper>{productId} khkhk</Wrapper>
    </section>
  );
}

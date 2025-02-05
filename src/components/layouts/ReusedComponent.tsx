
export default function GridComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-10  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 content-center w-full ">
      {children}
    </div>
  );
}

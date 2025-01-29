
export default function GridComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-10  grid grid-cols-5 gap-10 content-center w-full ">
      {children}
    </div>
  );
}

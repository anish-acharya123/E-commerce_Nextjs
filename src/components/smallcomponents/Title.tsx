export default function Title({ text }: { text: string }) {
  return (
    <div className="flex items-center  md:gap-3 gap-2">
      <span className="w-6 md:h-14 h-10 bg-primary"></span>
      <p className="md:text-2xl text-xl font-bold text-primary  ">{text}</p>
    </div>
  );
}

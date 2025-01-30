export default function Title({ text }: { text: string }) {
  return (
    <div className="flex items-center  gap-3">
      <span className="w-6 h-14 bg-primary"></span>
      <p className="text-2xl font-bold text-primary  ">{text}</p>
    </div>
  );
}

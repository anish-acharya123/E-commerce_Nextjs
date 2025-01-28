export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1700px] px-6 mx-auto ">{children}</div>;
}

import data from "@/app/_data/Slider_data.json";
import DemoSlider from "./sections/Carousel";

export default function Hero() {
  return (
    <section className="h-[30rem] mt-4  ">
      <DemoSlider data={data} />
    </section>
  );
}

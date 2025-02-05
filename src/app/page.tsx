import Category from "@/components/Category";
import CustomerService from "@/components/CustomerService";
import Hero from "@/components/Hero";
import OurFood from "@/components/OurFood";
import Todays from "@/components/Today's";

export default function Home() {
  return (
    <div>
      <Hero />
      <Todays />
      {/* <Category />
      <OurFood />
      <CustomerService /> */}
    </div>
  );
}

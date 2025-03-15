import Wrapper from "./layouts/Wrapper";
import { Nav, NavHamburger, NavItems, SearchAndCard } from "./sections/Nav";
import Link from "next/link";

export default function Navbar() {
  return (
    <Nav>
      <Wrapper>
        <div className="flex  gap-10 items-center">
          <section className="flex-1 ">
            <Link href={"/"}>
              <h1 className="md:text-3xl text-2xl font-bold text-primary">
                FOODZONE
              </h1>
            </Link>
          </section>
          <section className=" flex-1  lg:space-x-14 space-x-6 lg:block hidden">
            <NavItems />
          </section>
          <section className="   lg:space-x-6 space-x-4 text-base lg:text-lg  lg:flex hidden  lg:justify-center lg:items-center ">
            <SearchAndCard />
          </section>

          {/* for mobile  */}
          <section className="lg:hidden">
            <NavHamburger />
          </section>
        </div>
      </Wrapper>
    </Nav>
  );
}

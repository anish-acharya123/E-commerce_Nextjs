import Wrapper from "./layouts/Wrapper";
import {
  Nav,
  NavHamburger,
  NavItems,
  // NavLink,
  NavLogAndSign,
} from "./smallcomponents/Nav";
import Link from "next/link";

export default function Navbar() {
  return (
    <Nav>
      <Wrapper>
        <div className="flex  justify-between items-center">
          <section>
            <Link href={"/"}>
              {/* <Image
                src="/logo.png"
                alt="Example placeholder image"
                width={50}
                height={50}
                className="rounded-full shadow-md lg:h-16 lg:w-16 h:10 w:10"
              /> */}
              <h1 className="text-3xl font-semibold text-primary">FOODZONE</h1>
            </Link>
          </section>
          <section className="lg:space-x-14 space-x-6 md:block hidden">
            <NavItems />
          </section>
          <section className="lg:space-x-6 space-x-4 text-base lg:text-lg  md:flex hidden  ">
            <NavLogAndSign />
          </section>

          {/* for mobile  */}
          <section className="md:hidden">
            <NavHamburger />
          </section>
        </div>
      </Wrapper>
    </Nav>
  );
}

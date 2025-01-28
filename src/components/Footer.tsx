import Image from "next/image";
import Wrapper from "./layouts/Wrapper";
import { FooterFirst } from "./smallcomponents/FooterComponent";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 bg-secondary   border-t-2 bg-green-400 ">
      <Wrapper>
        <div className="flex  flex-col gap-10">
          <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-y-0 gap-y-10 grid-cols-1 gap-4 bg-red- ">
            <FooterFirst />
            <div
              className=""
              // data-aos="fade-up" data-aos-duration="2500"
            >
              <p className="text-2xl font-semibold pb-2 border-b-4 sm:w-1/2">
                Payment Method
              </p>

              <Image
                src={"/khalti.jpg"}
                alt="khalti"
                width={200}
                height={200}
                className="pt-2"
              />
            </div>
          </section>
          <hr />
          <section className="flex justify-between md:flex-row flex-col items-center text-center gap-4">
            <p> ©copyright 2025 Giriraj Aryal. All rights reserved.</p>
            <p>
              Designed and Developed by
              <Link href="https://anish-acharya.com.np" className="  font-bold">
                {" "}
                @anish_acharya❤️
              </Link>
            </p>
          </section>
        </div>
      </Wrapper>
    </footer>
  );
}

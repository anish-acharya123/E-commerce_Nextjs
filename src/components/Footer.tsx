import Image from "next/image";
import Wrapper from "./layouts/Wrapper";
import { FooterFirst } from "./sections/FooterComponent";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  return (
    <footer className="py-10 bg-primary  border-t-2 text-white ">
      <Wrapper>
        <div className="flex  flex-col gap-8">
          <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 sm:gap-y-0 gap-y-10 grid-cols-1 gap-4 bg-red- ">
            <div>
              <p className="md:text-2xl text-xl font-semibold pb-2  ">
                Exclusive
              </p>
              <span className="text-gray-200 md:text-base text-sm">
                Get 20% off your order
              </span>

              <div className=" border-2 w-48 px-2 mt-2 py-1 rounded-md flex items-center">
                <input
                  type="text"
                  className="bg-transparent  outline-none w-36 "
                  placeholder="Enter your email"
                />
                <Icon
                  icon="ic:twotone-send"
                  className="text-2xl text-gray-300"
                />
              </div>
            </div>
            <FooterFirst />
            <div
              className=""
              // data-aos="fade-up" data-aos-duration="2500"
            >
              <p className="md:text-2xl text-xl  font-semibold pb-2  ">
                Download App
              </p>
              <span className="text-gray-200  md:text-base text-sm">
                Save $3 with App New User Only
              </span>

              <div className="flex gap-4 pt-4 ">
                <Image
                  src={"/qr.png"}
                  alt="khalti"
                  width={100}
                  height={100}
                  className=""
                />
                <div className="flex flex-col items-center justify-between gap-4 ">
                  <button className="border-2 px-4 flex-1 flex items-center  gap-2  rounded-md ">
                    <Icon
                      icon="streamline:play-store-solid"
                      className="text-xl"
                    />
                    <span className=" md:text-base text-sm">Play Store</span>
                  </button>
                  <button className="border-2 px-4 flex-1  flex items-center  gap-2  rounded-md">
                    <Icon icon="ic:twotone-apple" className="text-xl" />{" "}
                    <span className=" md:text-base text-sm">App Store</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section className="text-center text-sm md:text-base ">
            <p> ©copyright 2025 Anish Acharya. All rights reserved.</p>
          </section>
        </div>
      </Wrapper>
    </footer>
  );
}

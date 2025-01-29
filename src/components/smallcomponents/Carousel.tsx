"use client";

import React from "react";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Wrapper from "../layouts/Wrapper";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <Swiper
      // navigation
      autoplay={{
        delay: 10000,
        reverseDirection: true, // Reverse the autoplay direction
        disableOnInteraction: false,
      }}
      grabCursor={true}
      pagination={{ type: "bullets", clickable: true }}
      loop={true}
      modules={[Autoplay, Pagination]}
      className="h-full "
      speed={800}
    >
      {data.map(({ id, image, tagline, title }) => (
        <SwiperSlide key={id} className="relative">
          <div
            className="absolute w-full h-full   bg-blend-multiply shadow-xl  bg-secondary"
            style={
              {
                // backgroundImage: `url(${image}) `,
                // clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0 100%)",
              }
            }
          />
          <div
            data-aos="fade-up"
            className="relative z-10 h-full  w-full flex items-center justify-center"
          >
            <div className="  w-full ">
              <Wrapper>
                <div className="flex items-center  justify-between">
                  <div className="text-left space-y-4">
                    <p className="text-3xl sm:text-7xl  font-bold text-white ">
                      {title}
                    </p>
                    {tagline && (
                      <p className="text-md sm:text-xl lg:text-xl font- text-white ">
                        {tagline}
                      </p>
                    )}
                    <button className="bg-button px-8 py-2 rounded-md text-white hover:bg-primary  transition-colors duration-300">
                      Order Now →
                    </button>
                  </div>
                  <div className=" flex items-center justify-center">
                    {/* {image} */}
                    <Image
                      src={image}
                      alt="crausel image"
                      width={500}
                      height={500}
                      className=""
                    />
                  </div>
                </div>
              </Wrapper>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DemoSlider;

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
        <SwiperSlide key={id} className="relative ">
          <div
            data-aos="fade-up"
            className="relative z-10 h-full  w-full flex items-center justify-center    bg-secondary"
          >
            <div className="  w-full ">
              <Wrapper>
                <div className="flex items-center  justify-between sm:flex-row flex-col-reverse ">
                  <div className="sm:text-left text-center space-y-4">
                    <p className="md:text-7xl sm:text-5xl text-3xl font-bold text-white ">
                      {title}
                    </p>
                    {tagline && (
                      <p className="text-md  lg:text-xl font- text-white ">
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
                      className=" h-52 w-52 md:h-80 md:w-80 lg:h-96 lg:w-auto"
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

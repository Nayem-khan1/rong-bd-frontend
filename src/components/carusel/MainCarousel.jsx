import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { assets } from "../../assets/assets";

const MainCarousel = () => {
  const sliderData = [
    {
      id: 1,
      title: "Summer Collection 2025",
      info: "Discover light, breathable styles perfect for the sunny days ahead.",
      buttonName: "Shop Summer",
      url: "/collection",
      image: assets.slider1,
    },
    {
      id: 2,
      title: "Kids Wear Bonanza",
      info: "Cute and comfy clothing for your little ones. Up to 30% off!",
      buttonName: "Shop Kids",
      url: "/collection",
      image: assets.slider2,
    },
    {
      id: 3,
      title: "Women's New Arrivals",
      info: "Fresh fashion trends, just in. Upgrade your wardrobe today!",
      buttonName: "Browse Women",
      url: "/collection",
      image: assets.slider3,
    },
    {
      id: 4,
      title: "Kids Wear Bonanza",
      info: "Cute and comfy clothing for your little ones. Up to 30% off!",
      buttonName: "Shop Kids",
      url: "/collection",
      image: assets.slider4,
    },
    {
      id: 5,
      title: "Flat 40% Off Sale",
      info: "Grab your favorites before they're gone. Limited time only!",
      buttonName: "View Offers",
      url: "/collection",
      image: assets.slider5,
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          clickable: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {sliderData?.map((item, i) => (
          <SwiperSlide
            className="h-full relative rounded-lg overflow-hidden"
            key={i + 1}
          >
            <div className="text-sm text-gray-600 hover:text-emerald-dark">
              <img
                width={950}
                height={400}
                src={item.image}
                alt={item.title}
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
              <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
                <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none  lg:line-clamp-none  lg:text-3xl font-bold text-gray-800">
                  {item.title}
                </h1>
                <p className="text-base leading-6 text-gray-600 font-sans line-clamp-1  md:line-clamp-none lg:line-clamp-none">
                  {item.info}
                </p>
                <Link
                  href={item.url}
                  className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-primary text-center rounded-md text-white hover:bg-primary"
                >
                  {item.buttonName}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainCarousel;

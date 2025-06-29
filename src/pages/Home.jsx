import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import Category from "../components/Category";
import Offer from "../components/Offer";
import StickyCart from "../components/cart/StickyCart";
import MainCarousel from "../components/carusel/MainCarousel";
import Banner from "../components/banner/Banner";
import OfferCard from "../components/offer/OfferCard";

const Home = () => {
  return (
    <div className="min-h-screen">
      <StickyCart />
      <div className="bg-white">
        <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
          <div className="flex w-full">
            <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5">
              <MainCarousel />
            </div>
            <div className="w-full hidden lg:flex">
              <OfferCard />
            </div>
          </div>
          <div className="bg-pink-100 px-10 py-6 rounded-lg mt-6">
            <Banner />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 lg:py-16 py-10">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <Category />
        </div>
      </div>
      <div className="bg-white lg:py-16 py-10">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <BestSeller />
        </div>
      </div>
      <div className="bg-gray-100 lg:py-16 py-10">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <Offer />
        </div>
      </div>
      <div className="bg-white lg:py-16 py-10">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <LatestCollection />
        </div>
      </div>
      <div className="bg-gray-100 lg:py-16 py-10">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <OurPolicy />
        </div>
      </div>
      <div className="bg-white lg:py-16 py-10">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <NewsletterBox />
        </div>
      </div>
    </div>
  );
};

export default Home;

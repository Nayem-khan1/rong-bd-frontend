import React from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./../components/layout/Navbar";
import NavBarTop from "./../components/layout/NavBarTop";
import { Outlet } from "react-router";
import MobileFooter from "./../components/layout/footer/MobileFooter";
import Footer from "./../components/Footer";

const Main = () => {
  return (
    <>
      <Toaster />
      <div className="relative">
        <NavBarTop />
        <Navbar />

        {/* Content area */}
        <div className="bg-gray-50">
          <Outlet />
        </div>

        <MobileFooter />

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;

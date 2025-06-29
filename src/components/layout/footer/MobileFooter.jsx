import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";

import { FiHome, FiUser, FiShoppingCart, FiAlignLeft } from "react-icons/fi";
import { Link } from "react-router";

const MobileFooter = () => {
  const { token, getCartCount } = useContext(ShopContext);
  const [user, setUser] = useState();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    const parseUser = JSON.parse(userInfo);
    setUser(parseUser);
  }, [token]);
  return (
    <>
      <div className="flex flex-col h-full justify-between align-middle bg-white rounded cursor-pointer overflow-y-scroll flex-grow scrollbar-hide w-full">
        {/* <CategoryDrawer className="w-6 h-6 drop-shadow-xl" /> */}
      </div>
      <footer className="lg:hidden fixed z-30 bottom-0 bg-primary flex items-center justify-between w-full h-16 px-3 sm:px-10">
        <button
          aria-label="Bar"
          //   onClick={toggleCategoryDrawer}
          className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
        >
          <span className="text-xl text-white">
            <FiAlignLeft className="w-6 h-6 drop-shadow-xl" />
          </span>
        </button>
        <Link
          to="/"
          className="text-xl text-white"
          rel="noreferrer"
          aria-label="Home"
        >
          <FiHome className="w-6 h-6 drop-shadow-xl" />
        </Link>

        <button
          //   onClick={toggleCartDrawer}
          className="h-9 w-9 relative whitespace-nowrap inline-flex items-center justify-center text-white text-lg"
        >
          <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">
            {getCartCount()}
          </span>
          <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
        </button>
        <button
          aria-label="User"
          type="button"
          className="text-xl text-white indicator justify-center"
        >
          {user?.image ? (
            <Link to="/user/dashboard" className="relative top-1 w-6 h-6">
              <img
                width={29}
                height={29}
                src=""
                alt="user"
                className="rounded-full"
              />
            </Link>
          ) : user?.name ? (
            <Link
              to="/user/dashboard"
              className="leading-none font-bold font-serif block"
            >
              {user?.name}
            </Link>
          ) : (
            <Link to="/auth/login">
              <FiUser className="w-6 h-6 drop-shadow-xl" />
            </Link>
          )}
        </button>
      </footer>
    </>
  );
};

export default MobileFooter;

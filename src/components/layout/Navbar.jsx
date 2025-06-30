import React, { useContext, useEffect, useRef, useState } from "react";
import { Transition, Popover } from "@headlessui/react";
import { ShopContext } from "../../context/ShopContext";
import { assets } from "../../assets/assets";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser, FiBell } from "react-icons/fi";
import { Link } from "react-router";
import NavbarPromo from "./NavbarPromo";
import { ArrowRight, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const { getCartCount, token, navigate, setToken, setCartItems } =
    useContext(ShopContext);
  const [user, setUser] = useState();

  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const logOut = () => {
    navigate("/login");
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setToken("");
    setCartItems({});
  };

  const handleProfileClick = () => {
    if (!token) {
      navigate("/login");
    } else {
      setOpen(!open);
    }
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    const parseUser = JSON.parse(userInfo);
    setUser(parseUser);
  }, [token]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-primary sticky top-0 z-20">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
        <div className="top-bar h-16 lg:h-auto flex items-center justify-between py-4 mx-auto">
          <Link
            to="/"
            className="mr-3 lg:mr-12 xl:mr-12 hidden md:hidden lg:block"
          >
            <img src={assets.logoWhite} className="w-36" alt="logo" />
          </Link>
          <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
            <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
              <div className="flex flex-col mx-auto w-full">
                <form
                  onSubmit={handleSubmit}
                  className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm w-full"
                >
                  <label className="flex items-center py-0.5">
                    <input
                      onChange={(e) => setSearchText(e.target.value)}
                      value={searchText}
                      className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                      // placeholder={t("search-placeholder")}
                      placeholder="Search"
                    />
                  </label>
                  <button
                    aria-label="Search"
                    type="submit"
                    className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                  >
                    <IoSearchOutline />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              className="pr-5 text-white text-2xl font-bold"
              aria-label="Alert"
            >
              <FiBell className="w-6 h-6 drop-shadow-xl" />
            </button>
            <Link
              to="/cart"
              aria-label="Total"
              // onClick={toggleCartDrawer}
              className="relative px-5 text-white text-2xl font-bold inline-flex"
            >
              <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                {getCartCount()}
              </span>
              <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
            </Link>

            {/* Profile dropdown */}
            <div
              className="inline-flex relative pl-5 text-white text-2xl font-bold"
              ref={menuRef}
            >
              {user?.name ? (
                <p
                  onClick={handleProfileClick}
                  className="leading-none font-bold font-serif block cursor-pointer"
                >
                  {user?.name} <ChevronDown className="inline-flex" />
                </p>
              ) : (
                <Link to="/login">
                  <FiUser className="w-6 h-6 drop-shadow-xl" />
                </Link>
              )}

              {token && open && (
                <div className="absolute right-0 mt-8 z-30 w-40 bg-white border border-gray-200 rounded shadow-lg animate-fadeIn">
                  <ul className="flex flex-col text-sm text-gray-700">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        navigate("/profile");
                        setOpen(false);
                      }}
                    >
                      Profile
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        navigate("/orders");
                        setOpen(false);
                      }}
                    >
                      Orders
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => {
                        logOut();
                        setOpen(false);
                      }}
                    >
                      <span>Logout</span>
                      <ArrowRight className="w-3 ml-2" />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* second header */}
      <NavbarPromo />
    </div>
  );
};

export default Navbar;

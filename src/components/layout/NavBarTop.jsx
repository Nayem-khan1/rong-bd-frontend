import React, { useContext, useEffect, useState } from "react";
import { IoLockOpenOutline } from "react-icons/io5";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router";

const NavBarTop = () => {
  const { token } = useContext(ShopContext);
  const [user, setUser] = useState();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    const parseUser = JSON.parse(userInfo);
    setUser(parseUser);
  }, [token]);
  return (
    <>
      <div className="hidden lg:block bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="text-gray-700 py-2 font-sans text-xs font-medium flex justify-between items-center">
            <span className="flex items-center">
              <FiPhoneCall className="mr-2" />
              {/* {showingTranslateValue(
                storeCustomizationSetting?.navbar?.help_text
              )} */}{" "}
              We are available 24/7, need help?
              <a
                to={`tel:${"+8801723456543"}`}
                className="font-bold text-primary ml-1"
              >
                +8801723456543
              </a>
            </span>

            <div className="lg:text-right flex items-center navBar">
              <div>
                <Link to="/about" className="font-medium hover:text-primary">
                  {/* {showingTranslateValue(
                      storeCustomizationSetting?.navbar?.about_us
                    )} */}
                  About Us
                </Link>
                <span className="mx-2">|</span>
              </div>
              <div>
                <Link to="/contact" className="font-medium hover:text-primary">
                  {/* {showingTranslateValue(
                      storeCustomizationSetting?.navbar?.contact_us
                    )} */}
                  Contact Us
                </Link>
                <span className="mx-2">|</span>
              </div>
              <Link to="/profile" className="font-medium hover:text-primary">
                {/* {showingTranslateValue(
                  storeCustomizationSetting?.navbar?.my_account
                )} */}
                My Account
              </Link>
              <span className="mx-2">|</span>
              {user?.email ? (
                <button
                  //   onClick={handleLogOut}
                  className="flex items-center font-medium hover:text-primary"
                >
                  <span className="mr-1">
                    <IoLockOpenOutline />
                  </span>
                  {/* {showingTranslateValue(
                    storeCustomizationSetting?.navbar?.logout
                  )} */}{" "}
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center font-medium hover:text-primary"
                >
                  <span className="mr-1">
                    <FiUser />
                  </span>
                  {/* {showingTranslateValue(
                    storeCustomizationSetting?.navbar?.login
                  )} */}
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarTop;

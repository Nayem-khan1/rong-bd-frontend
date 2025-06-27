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
          <div className="text-gray-700 py-2 font-sans text-xs font-medium border-b flex justify-between items-center">
            <span className="flex items-center">
              <FiPhoneCall className="mr-2" />
              {/* {showingTranslateValue(
                storeCustomizationSetting?.navbar?.help_text
              )} */}{" "}
              Help line
              <a
                to={`tel:${"+099949343"}`}
                className="font-bold text-emerald-500 ml-1"
              >
                "+099949343"
              </a>
            </span>

            <div className="lg:text-right flex items-center navBar">
              <div>
                <Link
                  to="/about-us"
                  className="font-medium hover:text-emerald-600"
                >
                  {/* {showingTranslateValue(
                      storeCustomizationSetting?.navbar?.about_us
                    )} */}
                  about us
                </Link>
                <span className="mx-2">|</span>
              </div>
              <div>
                <Link
                  to="/contact-us"
                  className="font-medium hover:text-emerald-600"
                >
                  {/* {showingTranslateValue(
                      storeCustomizationSetting?.navbar?.contact_us
                    )} */}
                  contact us
                </Link>
                <span className="mx-2">|</span>
              </div>
              <Link
                to="/user/my-account"
                className="font-medium hover:text-emerald-600"
              >
                {/* {showingTranslateValue(
                  storeCustomizationSetting?.navbar?.my_account
                )} */}
                my account
              </Link>
              <span className="mx-2">|</span>
              {user?.email ? (
                <button
                  //   onClick={handleLogOut}
                  className="flex items-center font-medium hover:text-emerald-600"
                >
                  <span className="mr-1">
                    <IoLockOpenOutline />
                  </span>
                  {/* {showingTranslateValue(
                    storeCustomizationSetting?.navbar?.logout
                  )} */}{" "}
                  logout
                </button>
              ) : (
                <Link
                  to="/auth/login"
                  className="flex items-center font-medium hover:text-emerald-600"
                >
                  <span className="mr-1">
                    <FiUser />
                  </span>
                  {/* {showingTranslateValue(
                    storeCustomizationSetting?.navbar?.login
                  )} */}
                  login
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

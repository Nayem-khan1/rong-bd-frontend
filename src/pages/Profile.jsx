import React, { useContext, useEffect, useState } from "react";
import Order from "./Order";
import { ArrowRight, User2Icon, UserCircle2 } from "lucide-react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Profile = () => {
  const { navigate, token, setToken, setCartItems } = useContext(ShopContext);
  const [user, setUser] = useState();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    const parseUser = JSON.parse(userInfo);
    setUser(parseUser);
  }, [token]);

  const logOut = () => {
    navigate("/login");
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setToken("");
    setCartItems({});
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 border-t border-gray-300 pt-16">
        <div className="text-2xl">
          <Title text1={"MY"} text2={"PROFILE"} />
        </div>
        {/* Profile Card */}
        <div className="py-4 border-t border-gray-300 text-gray-700 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300">
              <User2Icon className="w-20 h-20 text-gray-400" />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">
              Account Overview
            </h2>
            <div className="mt-4 space-y-1 text-gray-700">
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {user?.name || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {user?.email || "N/A"}
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => logOut()}
              className="flex items-center border border-primary px-4 py-2 text-base font-medium hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer"
            >
              <span>Logout</span>
              <ArrowRight className="w-3 ml-2" />
            </button>
          </div>
        </div>
      </div>
      {/* Orders Section */}
      <div className="">
        <Order />
      </div>
    </div>
  );
};

export default Profile;

import React, { useContext, useEffect, useState } from "react";
import Order from "./Order";
import {
  LogOut,
  User,
  Mail,
  ShieldCheck,
  Package,
  Settings,
  ChevronRight,
} from "lucide-react";
import { ShopContext } from "../context/ShopContext";

const Profile = () => {
  const { navigate, token, setToken, setCartItems } = useContext(ShopContext);
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, [token]);

  const logOut = () => {
    navigate("/login");
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setToken("");
    setCartItems({});
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6 lg:space-y-8">
        {/* Header Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full pointer-events-none -z-10"></div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-primary/80 flex items-center justify-center text-white shadow-lg shadow-primary/30">
                <User size={40} className="opacity-90" />
              </div>
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                {user.name}
              </h1>
              <p className="text-gray-500 font-medium flex items-center justify-center sm:justify-start gap-2 mt-1">
                <Mail size={16} />
                {user.email}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100 uppercase tracking-wide">
                <ShieldCheck size={14} />
                Verified Account
              </div>
            </div>
          </div>

          <button
            onClick={logOut}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-rose-100 text-rose-600 font-bold hover:bg-rose-50 hover:border-rose-200 transition-all duration-300 shadow-sm"
          >
            <LogOut size={18} strokeWidth={2.5} />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar Nav */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 sticky top-28">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                    activeTab === "overview"
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <User
                      size={20}
                      strokeWidth={activeTab === "overview" ? 2.5 : 2}
                    />
                    <span className="font-semibold">My Details</span>
                  </div>
                  {activeTab !== "overview" && (
                    <ChevronRight size={18} className="text-gray-400" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                    activeTab === "orders"
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Package
                      size={20}
                      strokeWidth={activeTab === "orders" ? 2.5 : 2}
                    />
                    <span className="font-semibold">My Orders</span>
                  </div>
                  {activeTab !== "orders" && (
                    <ChevronRight size={18} className="text-gray-400" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                    activeTab === "settings"
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Settings
                      size={20}
                      strokeWidth={activeTab === "settings" ? 2.5 : 2}
                    />
                    <span className="font-semibold">Settings</span>
                  </div>
                  {activeTab !== "settings" && (
                    <ChevronRight size={18} className="text-gray-400" />
                  )}
                </button>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            {activeTab === "overview" && (
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-10 transition-all duration-500">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Full Name
                    </label>
                    <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-800 font-semibold text-lg">
                      {user.name || "N/A"}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Email Address
                    </label>
                    <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-800 font-semibold text-lg">
                      {user.email || "N/A"}
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Account Status
                    </label>
                    <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-2xl flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                        <ShieldCheck size={28} strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="font-bold text-blue-900 text-lg">
                          Active Member
                        </p>
                        <p className="text-sm text-blue-700/80 font-medium">
                          Your account is fully verified and secure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="shadow-sm rounded-3xl overflow-hidden bg-white border border-gray-100 transition-all duration-500">
                <Order />
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-10 text-center py-20 transition-all duration-500">
                <Settings
                  size={48}
                  className="mx-auto text-gray-300 mb-4 animate-[spin_4s_linear_infinite]"
                />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Account Settings
                </h2>
                <p className="text-gray-500">
                  Configuration options will be available soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

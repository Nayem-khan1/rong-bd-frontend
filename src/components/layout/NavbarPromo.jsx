import { Fragment } from "react";
import { Transition, Popover } from "@headlessui/react";
import { ChevronDownIcon, Shirt, ShoppingBag, Baby } from "lucide-react";
import {
  FiGift,
  FiAlertCircle,
  FiHelpCircle,
  FiShoppingBag,
  FiFileText,
  FiUsers,
  FiPocket,
  FiPhoneIncoming,
} from "react-icons/fi";
import { Link } from "react-router";

//internal import

const NavbarPromo = () => {
  return (
    <div className="hidden lg:block xl:block bg-white border-b border-gray-300">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 h-12 flex justify-between items-center">
        <div className="inline-flex">
          <Popover className="relative">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center md:justify-start md:space-x-10">
                <Popover.Group
                  as="nav"
                  className="md:flex space-x-10 items-center"
                >
                  <Popover className="relative font-serif">
                    {({ close }) => (
                      <>
                        <Popover.Button className="group inline-flex items-center py-2 hover:text-primary focus:outline-none">
                          <span className="font-serif text-sm font-medium">
                            Category
                          </span>
                          <ChevronDownIcon className="ml-1 h-3 w-3 group-hover:text-primary" />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 mt-2 w-64 bg-white shadow-lg ring-1 ring-black ring-opacity-5 rounded-md p-4">
                            <div className="grid gap-3">
                              <Link
                                to="/collection?category=Men"
                                onClick={() => close()}
                                className="flex items-center hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary"
                              >
                                <Shirt className="w-4 h-4 mr-2" /> Men
                              </Link>
                              <Link
                                to="/collection?category=Women"
                                onClick={() => close()}
                                className="flex items-center hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary"
                              >
                                <ShoppingBag className="w-4 h-4 mr-2" /> Women
                              </Link>
                              <Link
                                to="/collection?category=Kids"
                                onClick={() => close()}
                                className="flex items-center hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary"
                              >
                                <Baby className="w-4 h-4 mr-2" /> Kids
                              </Link>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Link
                    to="/about"
                    className="font-serif mx-4 py-2 text-sm font-medium hover:text-primary"
                  >
                    About us
                  </Link>

                  <Link
                    to="/contact"
                    className="font-serif mx-4 py-2 text-sm font-medium hover:text-primary"
                  >
                    contact us
                  </Link>

                  <Popover className="relative font-serif">
                    {({ close }) => (
                      <>
                        <Popover.Button className="group inline-flex items-center py-2 text-sm font-medium hover:text-primary focus:outline-none">
                          <span>Pages</span>
                          <ChevronDownIcon
                            className="ml-1 h-3 w-3 group-hover:text-primary"
                            aria-hidden="true"
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs bg-white">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full">
                              <div className="relative grid gap-2 px-6 py-6">
                                {[
                                  {
                                    icon: <FiShoppingBag />,
                                    to: "/collection",
                                    text: "Collection",
                                  },
                                  {
                                    icon: <FiUsers />,
                                    to: "/about",
                                    text: "About Us",
                                  },
                                  {
                                    icon: <FiPhoneIncoming />,
                                    to: "/contact",
                                    text: "Contact Us",
                                  },
                                  {
                                    icon: <FiPocket />,
                                    to: "/privacy-policy",
                                    text: "Privacy Policy",
                                  },
                                  {
                                    icon: <FiFileText />,
                                    to: "/terms-and-condition",
                                    text: "Terms and Condition",
                                  },
                                ].map((item, index) => (
                                  <span
                                    key={index}
                                    className="p-2 font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-primary"
                                  >
                                    <div className="w-full flex">
                                      {item.icon}
                                      <Link
                                        to={item.to}
                                        onClick={() => close()}
                                        className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium hover:text-primary"
                                      >
                                        {item.text}
                                      </Link>
                                    </div>
                                  </span>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>
              </div>
            </div>
          </Popover>
        </div>
        <div className="flex">
          <Link
            to="/privacy-policy"
            className="font-serif mx-4 py-2 text-sm font-medium hover:text-primary"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-and-condition"
            className="font-serif mx-4 py-2 text-sm font-medium hover:text-primary"
          >
            Terms and Condition
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarPromo;

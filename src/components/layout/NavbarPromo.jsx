import { Fragment } from "react";
import { Transition, Popover } from "@headlessui/react";
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
import { ChevronDownIcon } from "@heroicons/react/24/outline";

//internal import

const NavbarPromo = () => {
  return (
    <div className="hidden lg:block xl:block bg-white border-b">
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
                    <Popover.Button className="group inline-flex items-center py-2 hover:text-emerald-600 focus:outline-none">
                      <span className="font-serif text-sm font-medium">
                        {/* {showingTranslateValue(
                            storeCustomizationSetting?.navbar?.categories
                          )} */}{" "}
                        category
                      </span>

                      <ChevronDownIcon
                        className="ml-1 h-3 w-3 group-hover:text-emerald-600"
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
                      <Popover.Panel className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs c-h-65vh bg-white">
                        <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full">
                          {/* <Category /> */}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                  <Link
                    to="/about-us"
                    className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                  >
                    {/* {showingTranslateValue(
                        storeCustomizationSetting?.navbar?.about_us
                      )} */}{" "}
                    about us
                  </Link>

                  <Link
                    //   onClick={() => setIsLoading(!isLoading)}
                    to="/contact-us"
                    className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                  >
                    {/* {showingTranslateValue(
                        storeCustomizationSetting?.navbar?.contact_us
                      )} */}{" "}
                    contact us
                  </Link>

                  <Popover className="relative font-serif">
                    <Popover.Button className="group inline-flex items-center py-2 text-sm font-medium hover:text-emerald-600 focus:outline-none">
                      <span>
                        {/* {showingTranslateValue(
                          storeCustomizationSetting?.navbar?.pages
                        )} */}{" "}
                        pages
                      </span>
                      <ChevronDownIcon
                        className="ml-1 h-3 w-3 group-hover:text-emerald-600"
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
                            <span className="p-2  font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                              <div className="w-full flex">
                                <FiGift className="my-auto" />
                                <Link
                                  to="/offer"
                                  // onClick={() => setIsLoading(!isLoading)}
                                  className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium  hover:text-emerald-600"
                                >
                                  {/* {showingTranslateValue(
                                      storeCustomizationSetting?.navbar?.offers
                                    )} */}{" "}
                                  offer
                                </Link>
                              </div>
                            </span>
                            <span className="p-2  font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                              <div className="w-full flex">
                                <FiShoppingBag className="my-auto" />
                                <Link
                                  to="/checkout"
                                  //   onClick={() => setIsLoading(!isLoading)}
                                  className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium  hover:text-emerald-600"
                                >
                                  {/* {showingTranslateValue(
                                    storeCustomizationSetting?.navbar?.checkout
                                  )} */}{" "}
                                  checkout
                                </Link>
                              </div>
                            </span>

                            <span className="p-2 font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                              <div className="w-full flex">
                                <FiHelpCircle className="my-auto" />
                                <Link
                                  to="/faq"
                                  // onClick={() => setIsLoading(!isLoading)}
                                  className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium  hover:text-emerald-600"
                                >
                                  {/* {showingTranslateValue(
                                      storeCustomizationSetting?.navbar?.faq
                                    )} */}{" "}
                                  faq
                                </Link>
                              </div>
                            </span>
                            <span className="p-2  font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                              <div className="w-full flex">
                                <FiUsers className="my-auto" />
                                <Link
                                  to="/about-us"
                                  // onClick={() => setIsLoading(!isLoading)}
                                  className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium  hover:text-emerald-600"
                                >
                                  {/* {showingTranslateValue(
                                      storeCustomizationSetting?.navbar
                                        ?.about_us
                                    )} */}{" "}
                                  about us
                                </Link>
                              </div>
                            </span>

                            <span className="p-2  font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                              <div className="w-full flex">
                                <FiPhoneIncoming className="my-auto" />
                                <Link
                                  to="/contact-us"
                                  // onClick={() => setIsLoading(!isLoading)}
                                  className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium  hover:text-emerald-600"
                                >
                                  {/* {showingTranslateValue(
                                      storeCustomizationSetting?.navbar
                                        ?.contact_us
                                    )} */}{" "}
                                  contact us
                                </Link>
                              </div>
                            </span>

                            <span className="p-2  font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                              <div className="w-full flex">
                                <FiPocket className="my-auto" />
                                <Link
                                  to=""
                                  // onClick={() => setIsLoading(!isLoading)}
                                  className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium  hover:text-emerald-600"
                                >
                                  {/* {showingTranslateValue(
                                      storeCustomizationSetting?.navbar
                                        ?.privacy_policy
                                    )} */}{" "}
                                  privacy policy
                                </Link>
                              </div>
                            </span>

                            <span className="p-2  font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                              <div className="w-full flex">
                                <FiFileText className="my-auto" />
                                <Link
                                  to="/terms-and-conditions"
                                  // onClick={() => setIsLoading(!isLoading)}
                                  className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium  hover:text-emerald-600"
                                >
                                  {/* {showingTranslateValue(
                                      storeCustomizationSetting?.navbar
                                        ?.term_and_condition
                                    )} */}{" "}
                                  term and condition
                                </Link>
                              </div>
                            </span>

                            <span className="p-2  font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                              <div className="w-full flex">
                                <FiAlertCircle className="my-auto" />
                                <Link
                                  to=""
                                  //   onClick={() => setIsLoading(!isLoading)}
                                  className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium  hover:text-emerald-600"
                                >
                                  404
                                </Link>
                              </div>
                            </span>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>

                  <Link
                    to="/offer"
                    //   onClick={() => setIsLoading(!isLoading)}
                    className="relative inline-flex items-center  bg-red-100 font-serif ml-4 py-0 px-2 rounded text-sm font-medium text-red-500 hover:text-emerald-600"
                  >
                    {/* {showingTranslateValue(
                        storeCustomizationSetting?.navbar?.offers
                      )} */}{" "}
                    offers
                    <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </div>
                  </Link>
                </Popover.Group>
              </div>
            </div>
          </Popover>
        </div>
        <div className="flex">
          {/* flag */}
          <div className="dropdown">
            <div
            //   className={`flot-l flag ${currentLang?.flag?.toLowerCase()}`}
            ></div>
            <button className="dropbtn">
              {/* {currentLang?.name} */} bangladesh &nbsp;
              <i className="fas fa-angle-down"></i>
            </button>
            <div className="dropdown-content">
              {/* {languages?.map((language, i) => {
                return (
                  <Link
                    onClick={() => {
                      handleLanguage(language);
                    }}
                    key={i + 1}
                    to="/"
                    locale={`${language.iso_code}`}
                  >
                    <div
                      className={`flot-l flag ${language?.flag?.toLowerCase()}`}
                    ></div>
                    {language?.name}
                  </Link>
                );
              })} */}
            </div>
          </div>

          <Link
            //   onClick={() => setIsLoading(!isLoading)}
            to="/privacy-policy"
            className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
          >
            {/* {showingTranslateValue(
                storeCustomizationSetting?.navbar?.privacy_policy
              )} */}
            privacy policy
          </Link>
          <Link
            //   onClick={() => setIsLoading(!isLoading)}
            to="/terms-and-conditions"
            className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
          >
            {/* {showingTranslateValue(
                storeCustomizationSetting?.navbar?.term_and_condition
              )} */}
            term and condition
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarPromo;

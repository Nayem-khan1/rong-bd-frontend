import React, { useState } from "react";
import dayjs from "dayjs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import OfferTimer from "./OfferTimer";

const Coupon = () => {
  const [copiedCode, setCopiedCode] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopied = (code) => {
    setCopiedCode(code);
    setCopied(true);
  };

  const staticCoupons = [
    {
      _id: "1",
      title: "Summer Special Discount",
      logo: "/slider/slider-1.jpg",
      discountType: { type: "percentage", value: 20 },
      couponCode: "SUMMER20",
      endTime: dayjs().add(1, "day").toISOString(),
      minimumAmount: 100,
    },
    {
      _id: "2",
      title: "Flat ৳150 Off",
      logo: "/slider/slider-2.jpg",
      discountType: { type: "fixed", value: 150 },
      couponCode: "FLAT150",
      endTime: dayjs().subtract(1, "hour").toISOString(),
      minimumAmount: 500,
    },
  ];

  return (
    <>
      {staticCoupons.map((coupon) => (
        <div
          key={coupon._id}
          className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white shadow"
        >
          <div className="tengah py-2 px-3 flex items-center justify-items-start">
            <div className="ml-3">
              <div className="flex items-center font-serif">
                <h6 className="pl-1 text-base font-medium text-gray-600">
                  <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold">
                    {coupon.discountType.type === "fixed"
                      ? `৳${coupon.discountType.value}`
                      : `${coupon.discountType.value}%`}
                  </span>{" "}
                  Off
                </h6>
                <div className="ml-2">
                  {dayjs().isAfter(dayjs(coupon.endTime)) ? (
                    <span className="text-red-600 inline-block px-4 py-1 font-medium text-xs bg-red-100">
                      Inactive
                    </span>
                  ) : (
                    <span className="text-primary inline-block px-4 py-1 font-medium text-xs bg-pink-100">
                      Active
                    </span>
                  )}
                </div>
              </div>
              <h2 className="pl-1 font-serif text-base text-gray-700 leading-6 font-semibold mb-2">
                {coupon.title}
              </h2>
              {dayjs().isAfter(dayjs(coupon.endTime)) ? (
                <span className="inline-block mb-2">
                  <div className="flex items-center font-semibold">
                    <span className="flex items-center justify-center bg-red-500 text-white text-sm font-serif font-semibold mx-1 px-2 py-1">
                      00
                    </span>
                    :
                    <span className="flex items-center justify-center bg-red-500 text-white text-sm font-serif font-semibold mx-1 px-2 py-1">
                      00
                    </span>
                    :
                    <span className="flex items-center justify-center bg-red-500 text-white text-sm font-serif font-semibold mx-1 px-2 py-1">
                      00
                    </span>
                    :
                    <span className="flex items-center justify-center bg-red-500 text-white text-sm font-serif font-semibold mx-1 px-2 py-1">
                      00
                    </span>
                  </div>
                </span>
              ) : (
                <span className="inline-block mb-2">
                  <div className="flex items-center font-semibold">
                    <OfferTimer
                      expiryTimestamp={new Date(coupon.endTime)}
                      darkGreen
                    />
                  </div>
                </span>
              )}
            </div>
          </div>
          <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4">
            <div className="info flex items-center">
              <div className="w-full">
                <div className="block">
                  <div className="font-serif border border-dashed bg-pink-50 py-1 border-primary-300 text-center block">
                    <CopyToClipboard
                      text={coupon.couponCode}
                      onCopy={() => handleCopied(coupon.couponCode)}
                    >
                      <button className="block w-full">
                        {copied && coupon.couponCode === copiedCode ? (
                          <span className="text-primary text-sm leading-7 font-semibold">
                            Copied!
                          </span>
                        ) : (
                          <span className="uppercase font-serif font-semibold text-sm leading-7 text-primary">
                            {coupon.couponCode}
                          </span>
                        )}
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
                <p className="text-xs leading-4 text-gray-500 mt-2">
                  * This coupon applies when shopping more than{" "}
                  <span className="font-bold">৳{coupon.minimumAmount}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Coupon;

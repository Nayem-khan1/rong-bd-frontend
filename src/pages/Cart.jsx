import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);
  return (
    <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 border-t border-gray-300 py-10">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      {cartData.length === 0 ? (
        <div className="text-center text-gray-600">
          <img
            src={assets.empty_cart_icon || "https://i.imgur.com/oCkEbrA.png"}
            alt="Empty Cart"
            className="w-40 mx-auto mb-6 opacity-60"
          />
          <p className="text-lg font-semibold mb-4">Your cart is empty</p>
          <button
            onClick={() => navigate("/collection")}
            className="bg-primary text-white px-6 py-3 text-sm cursor-pointer hover:bg-secondary"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <>
          <div>
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              return (
                <div
                  key={index}
                  className="py-4 border-t border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
                >
                  <div className="flex items-start gap-6">
                    <img
                      className="w-16 sm:w-20"
                      src={productData.image[0]}
                      alt=""
                    />
                    <div>
                      <p className="text-xs sm:text-lg font-medium">
                        {productData.name}
                      </p>
                      <div className="flex items-center gap-5 mt-2">
                        <p>
                          {currency}
                          {productData.price}
                        </p>
                        <p className="px-2 sm:px-3 sm:py-1 border border-gray-300 bg-slate-50">
                          {item.size}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Quantity Selector */}
                  <div className="flex items-center border overflow-hidden w-fit">
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.size, item.quantity - 1)
                      }
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:text-gray-300 cursor-pointer"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-8 h-8 flex items-center justify-center text-sm font-medium border-x">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.size, item.quantity + 1)
                      }
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="w-4 mr-4 sm:w-5 cursor-pointer"
                    src={assets.bin_icon}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-end my-20">
            <div className="w-full sm:w-[450px]">
              <CartTotal />
              <div className="w-full text-end">
                <button
                  onClick={() => navigate("/place-order")}
                  className="bg-primary text-white text-sm my-8 px-8 py-3 cursor-pointer"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../Title";
import { assets } from "../../assets/assets";
import { Link } from "react-router";

const Drawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    delivery_fee,
    getCartAmount,
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const productId in cartItems) {
        for (const size in cartItems[productId]) {
          if (cartItems[productId][size] > 0) {
            tempData.push({
              _id: productId,
              size,
              quantity: cartItems[productId][size],
            });
          }
        }
      }
      setCartData(tempData.reverse());
    }
  }, [cartItems, products]);

  useEffect(() => {
    const isCartEmpty = Object.keys(cartItems).every((productId) =>
      Object.values(cartItems[productId]).every((qty) => qty === 0)
    );
    if (isCartEmpty) {
      setIsDrawerOpen(false);
    }
  }, [cartItems]);

  return (
    <Dialog
      open={isDrawerOpen}
      onClose={setIsDrawerOpen}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30 transition-opacity" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md transform bg-white shadow-xl flex flex-col h-full">
              {/* Header */}
              <div className="flex items-start justify-between px-6 pt-4 border-b border-gray-200">
                <DialogTitle className="text-xl">
                  <Title text1="MY" text2="CART" />
                </DialogTitle>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Scrollable Cart Content */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {cartData.map((item, index) => {
                  const product = products.find((p) => p._id === item._id);
                  if (!product) return null;

                  return (
                    <div
                      key={index}
                      className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-gray-200 pb-4"
                    >
                      {/* Product Info */}
                      <div className="flex gap-4 items-center">
                        <img
                          src={product.image[0]}
                          alt={product.name}
                          className="w-16 h-16 object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium">{product.name}</p>
                          <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                            <span>
                              {currency}
                              {product.price}
                            </span>
                            <span className="px-2 py-0.5 border text-xs bg-gray-100">
                              {item.size}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center border overflow-hidden w-fit">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item._id,
                              item.size,
                              item.quantity - 1
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:text-gray-300"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center text-sm font-medium border-x">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item._id,
                              item.size,
                              item.quantity + 1
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      {/* Delete Icon */}
                      <div className="flex justify-end">
                        <img
                          src={assets.bin_icon}
                          alt="Delete"
                          onClick={() => updateQuantity(item._id, item.size, 0)}
                          className="w-5 h-5 cursor-pointer"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Fixed Footer */}
              <div className="border-t border-gray-200 px-6 py-4 space-y-3">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>
                      {currency} {getCartAmount()}.00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {currency} {delivery_fee}.00
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>
                      {currency}{" "}
                      {getCartAmount() === 0
                        ? 0
                        : getCartAmount() + delivery_fee}
                      .00
                    </span>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <Link
                    to="/place-order"
                    className="border px-4 py-2 text-sm"
                  >
                    Continue Shopping
                  </Link>
                  <Link
                    to="/cart"
                    className="bg-black text-white px-4 py-2 text-sm"
                  >
                    Go to Cart
                  </Link>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Drawer;

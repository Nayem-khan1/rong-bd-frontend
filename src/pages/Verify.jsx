import React, { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-hot-toast";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const [status, setStatus] = useState("verifying");

  const verifyPayment = async () => {
    try {
      if (!token) return;

      const res = await axios.post(
        `${backendUrl}/api/order/verify-stripe`,
        { success, orderId },
        { headers: { token } }
      );

      if (res.data.success) {
        setCartItems({});
        setStatus("success");
        setTimeout(() => navigate("/orders"), 3000);
      } else {
        setStatus("failed");
        setTimeout(() => navigate("/cart"), 3000);
      }
    } catch (error) {
      console.error(error);
      toast.error("Verification failed");
      setStatus("failed");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center max-w-md w-full">
        {status === "verifying" && (
          <>
            <Loader2 className="animate-spin mx-auto text-blue-600 w-10 h-10" />
            <h2 className="mt-4 text-lg font-semibold text-gray-700">
              Verifying your payment...
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Please wait while we verify your order.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <CheckCircle className="text-green-500 w-10 h-10 mx-auto" />
            <h2 className="mt-4 text-lg font-semibold text-green-700">
              Payment Successful!
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Redirecting to your orders...
            </p>
          </>
        )}

        {status === "failed" && (
          <>
            <XCircle className="text-red-500 w-10 h-10 mx-auto" />
            <h2 className="mt-4 text-lg font-semibold text-red-700">
              Payment Failed!
            </h2>
            <p className="text-sm text-gray-600 mt-2 mb-4">
              Something went wrong. Redirecting to cart...
            </p>
            <button
              onClick={() => navigate("/cart")}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Go to Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Verify;

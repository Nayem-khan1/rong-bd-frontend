import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import {
  Package,
  Calendar,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Order = () => {
  const { backendUrl, currency, token } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const loadOrdersData = async () => {
    try {
      setLoading(true);
      if (!token) {
        setLoading(false);
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/user-orders",
        {},
        { headers: { token } },
      );
      if (response.data.success) {
        let allOrders = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrders.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
              orderId: order._id,
            });
          });
        });
        setOrderData(allOrders.reverse());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrdersData();
  }, [token]);

  // Pagination Logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orderData.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orderData.length / ordersPerPage);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-700 border-green-200";
      case "shipped":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "cancelled":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-amber-100 text-amber-700 border-amber-200";
    }
  };

  if (loading) {
    return (
      <div className="p-10 flex flex-col items-center justify-center space-y-4 h-64">
        <div className="w-12 h-12 border-4 border-gray-100 border-t-primary rounded-full animate-spin"></div>
        <p className="text-gray-500 font-medium animate-pulse">
          Loading amazing orders...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:p-10 bg-white">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <Package className="text-primary" size={28} />
            Order History
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Review and track your recent purchases.
          </p>
        </div>
        <div className="text-sm font-bold bg-gray-50 text-gray-700 py-2 px-5 rounded-full border border-gray-100 shadow-sm">
          {orderData.length} Total Items
        </div>
      </div>

      {orderData.length === 0 ? (
        <div className="text-center py-20 px-4 bg-gray-50/50 rounded-3xl border border-dashed border-gray-200 shadow-sm">
          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
            <Package size={40} className="text-gray-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No orders found
          </h3>
          <p className="text-gray-500 max-w-sm mx-auto">
            Looks like you haven't made any purchases yet. Explore our products
            and place your first order!
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {currentOrders.map((item, index) => (
            <div
              key={index}
              className="bg-white border text-gray-800 border-gray-100 hover:border-primary/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 rounded-3xl overflow-hidden flex flex-col md:flex-row gap-6 p-6"
            >
              <div className="flex-shrink-0 relative overflow-hidden rounded-2xl bg-gray-50 aspect-square w-28 sm:w-36 group border border-gray-100">
                <img
                  className="w-full h-full object-contain mix-blend-multiply p-3 group-hover:scale-110 transition-transform duration-700"
                  src={item.image && item.image[0] ? item.image[0] : ""}
                  alt={item.name}
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2 md:pr-4">
                      {item.name}
                    </h3>
                    <span
                      className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold border whitespace-nowrap uppercase tracking-wide ${getStatusColor(item.status)}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-3 text-sm text-gray-600 font-medium border-b border-gray-50 pb-4">
                    <div className="bg-gray-50 px-4 py-1.5 rounded-xl border border-gray-100">
                      Qty:{" "}
                      <span className="font-bold text-gray-900 ml-1">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="bg-gray-50 px-4 py-1.5 rounded-xl border border-gray-100">
                      Size:{" "}
                      <span className="font-bold text-gray-900 ml-1">
                        {item.size}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={16} className="text-gray-400" />
                      Ordered:{" "}
                      <span className="text-gray-900 font-semibold">
                        {new Date(item.date).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-500">
                      <CreditCard size={16} className="text-gray-400" />
                      Payment:{" "}
                      <span className="text-gray-900 font-semibold uppercase">
                        {item.paymentMethod}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-2 sm:mt-0">
                    <p className="text-2xl font-black text-gray-900">
                      {currency}
                      {item.price}
                    </p>
                    <button
                      onClick={loadOrdersData}
                      className="px-6 py-3 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                    >
                      Track Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-100 gap-4">
              <p className="text-sm text-gray-500 font-medium">
                Showing{" "}
                <span className="text-gray-900 font-bold">
                  {indexOfFirstOrder + 1}
                </span>{" "}
                to{" "}
                <span className="text-gray-900 font-bold">
                  {Math.min(indexOfLastOrder, orderData.length)}
                </span>{" "}
                of{" "}
                <span className="text-gray-900 font-bold">
                  {orderData.length}
                </span>{" "}
                entries
              </p>

              <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-xl text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={20} strokeWidth={2.5} />
                </button>

                <div className="flex items-center h-full">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                        currentPage === i + 1
                          ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                          : "text-gray-500 hover:text-gray-900 hover:bg-white"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-xl text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Order;

import React from "react";
import {
  FileText,
  BadgeCheck,
  Truck,
  RefreshCcw,
  CreditCard,
} from "lucide-react";
import NewsletterBox from "../components/NewsletterBox";

const terms = [
  {
    icon: <BadgeCheck className="text-primary w-6 h-6" />,
    title: "User Agreement",
    description:
      "By using our website, you agree to follow our terms and local laws while shopping from our store.",
  },
  {
    icon: <Truck className="text-primary w-6 h-6" />,
    title: "Shipping",
    description:
      "All orders are shipped to the address provided. Please ensure your delivery details are correct.",
  },
  {
    icon: <RefreshCcw className="text-primary w-6 h-6" />,
    title: "Returns & Exchanges",
    description:
      "You can return products within 7 days of delivery. Items must be unused and in original packaging.",
  },
  {
    icon: <CreditCard className="text-primary w-6 h-6" />,
    title: "Payment Policy",
    description:
      "All payments are processed securely. We are not liable for external transaction gateway issues.",
  },
  {
    icon: <FileText className="text-primary w-6 h-6" />,
    title: "Updates to Terms",
    description:
      "We reserve the right to update our terms at any time. Please review this page regularly.",
  },
];

const TermsAndConditions = () => {
  return (
    <div className="bg-background text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="bg-secondary/10 py-10 border-b border-accent/30">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <FileText className="text-primary w-7 h-7" />
              Terms & Conditions
            </h1>
            <p className="text-gray-700 text-base max-w-xl">
              Read our terms carefully before placing an order. Your trust is
              important to us.
            </p>
          </div>
          {/* <img
            src=""
            alt="Terms"
            className="w-40 md:w-56 shadow-sm"
          /> */}
        </div>
      </div>

      {/* Terms as Cards */}
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {terms.map((term, index) => (
          <div
            key={index}
            className="bg-white border border-accent p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              {term.icon}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {term.title}
                </h3>
                <p className="text-sm text-gray-700">{term.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-10">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default TermsAndConditions;

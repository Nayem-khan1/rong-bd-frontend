import React from "react";
import { ShieldCheck, Lock, MailCheck, User } from "lucide-react";
import NewsletterBox from "../components/NewsletterBox";
const policies = [
  {
    icon: <User className="text-primary w-6 h-6" />,
    title: "What We Collect",
    description:
      "We collect your name, shipping address, email, and payment info to process and deliver your orders.",
  },
  {
    icon: <Lock className="text-primary w-6 h-6" />,
    title: "Secure Handling",
    description:
      "Your data is encrypted and handled securely. We never store card details on our servers.",
  },
  {
    icon: <ShieldCheck className="text-primary w-6 h-6" />,
    title: "No Data Sharing",
    description:
      "We do not share or sell your data. We only use trusted partners for delivery and payment processing.",
  },
  {
    icon: <MailCheck className="text-primary w-6 h-6" />,
    title: "Contact Us Anytime",
    description: (
      <>
        Contact us anytime at{" "}
        <span className="font-medium text-primary">support@yourbrand.com</span>{" "}
        to request data removal or ask questions.
      </>
    ),
  },
];
const PrivacyPolicy = () => {
  return (
    <div className="bg-background text-gray-800 font-sans">
      {/* Hero Section (Compact) */}
      <div className="bg-secondary/10 py-10 border-b border-accent/30">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2 flex items-center gap-2">
              <ShieldCheck className="text-primary w-7 h-7" />
              Privacy Policy
            </h1>
            <p className="text-gray-700 text-base max-w-xl">
              We value your privacy. Here's how we protect your data while you
              shop with confidence.
            </p>
          </div>
          {/* <img
            src="https://img.freepik.com/free-vector/privacy-concept-illustration_114360-7852.jpg"
            alt="Privacy"
            className="w-40 md:w-56 rounded-lg shadow-sm"
          /> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="bg-white border border-accent rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              {policy.icon}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {policy.title}
                </h3>
                <p className="text-sm text-gray-700">{policy.description}</p>
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

export default PrivacyPolicy;

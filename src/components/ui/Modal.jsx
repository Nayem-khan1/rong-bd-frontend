import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useNavigate } from "react-router";

const Modal = ({ open, setOpen, redirectPath }) => {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    setOpen(false);
    navigate("/login", { state: { from: redirectPath }, replace: true });
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <h2 className="text-lg font-semibold">Login Required</h2>
            <p className="text-sm mt-2">Please log in to place your order.</p>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={redirectToLogin}
                className="border border-primary px-4 py-2 text-sm hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer"
              >
                Go to Login
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;

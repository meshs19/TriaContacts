import React, { useState, useRef, useEffect } from "react";
import { XIcon, UserIcon, MailIcon, PhoneIcon } from "./Icons.jsx";

const AddContactModal = ({ onClose, onAddContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAddContact({ name, email, phone });
    }
  };

  return (
    <div
      className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md p-8 relative transform transition-all animate-in fade-in-0 zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
          aria-label="Close modal"
        >
          <XIcon className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
          Add New Contact
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <UserIcon className="w-5 h-5 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <MailIcon className="w-5 h-5 text-slate-400" />
            </span>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <PhoneIcon className="w-5 h-5 text-slate-400" />
            </span>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex justify-end pt-2 space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg text-slate-600 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-400 transition"
              disabled={!name.trim()}
            >
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContactModal;

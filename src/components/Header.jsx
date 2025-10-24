import React from "react";
import { UserGroupIcon } from "./Icons.jsx";

const Header = () => {
  return (
    <header className="bg-white/70 dark:bg-black/70 backdrop-blur-lg sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <UserGroupIcon className="w-8 h-8 text-indigo-500" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              Tria Contacts
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

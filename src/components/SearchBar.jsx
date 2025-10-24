import React from "react";
import { SearchIcon } from "./Icons.jsx";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full md:w-64">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon className="w-5 h-5 text-slate-400" />
      </span>
      <input
        type="text"
        placeholder="Search contacts..."
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-colors"
      />
    </div>
  );
};

export default SearchBar;

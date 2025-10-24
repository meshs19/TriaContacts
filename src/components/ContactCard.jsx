import React from "react";
import { MailIcon, PhoneIcon } from "./Icons.jsx";

const ContactCard = ({ contact }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-5 flex items-start space-x-5 shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <img
        src={contact.avatarUrl}
        alt={contact.name}
        className="w-16 h-16 rounded-full object-cover flex-shrink-0 shadow-sm ring-2 ring-white dark:ring-slate-900"
      />
      <div className="flex-grow">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          {contact.name}
        </h2>
        <div className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center">
            <MailIcon className="w-4 h-4 mr-2 flex-shrink-0" />
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-indigo-500 truncate"
            >
              {contact.email}
            </a>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="w-4 h-4 mr-2 flex-shrink-0" />
            <a href={`tel:${contact.phone}`} className="hover:text-indigo-500">
              {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

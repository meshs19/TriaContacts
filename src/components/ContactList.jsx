import React from "react";
import ContactCard from "./ContactCard.jsx";
import { SearchIcon } from "./Icons.jsx";

const ContactList = ({ contacts }) => {
  if (contacts.length === 0) {
    return (
      <div className="text-center py-20">
        <SearchIcon className="w-20 h-20 mx-auto text-slate-300 dark:text-slate-600 mb-6" />
        <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">
          No Contacts Found
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Try adjusting your search or add a new contact.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;

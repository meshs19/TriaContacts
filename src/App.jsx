import React, { useState, useMemo } from "react";
import { INITIAL_CONTACTS } from "./constants.js";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ContactList from "./components/ContactList.jsx";
import AddContactModal from "./components/AddContactModal.jsx";
import { PlusIcon } from "./components/Icons.jsx";

const App = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredContacts = useMemo(() => {
    return contacts
      .filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [contacts, searchTerm]);

  const handleAddContact = (newContactData) => {
    const newContact = {
      ...newContactData,
      id: Date.now(),
      avatarUrl: `https://picsum.photos/seed/${Date.now()}/200`,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-50">
      <Header />
      <main className="container mx-auto max-w-4xl p-4 sm:p-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Contacts
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Manage your professional network.
              </p>
            </div>
            <SearchBar
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ContactList contacts={filteredContacts} />
        </div>
      </main>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
        aria-label="Add new contact"
      >
        <PlusIcon className="w-6 h-6" />
      </button>

      {isModalOpen && (
        <AddContactModal
          onClose={() => setIsModalOpen(false)}
          onAddContact={handleAddContact}
        />
      )}
    </div>
  );
};

export default App;

import React, { useState } from 'react';

const initialContacts = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Main St, Cityville',
    message: 'Interested in your products.',
    notes: 'Called on October 1st, 2023. Follow up next week.',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phoneNumber: '987-654-3210',
    address: '456 Oak St, Townsville',
    message: 'Looking for pricing information.',
    notes: 'Sent pricing details via email.',
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    phoneNumber: '555-123-4567',
    address: '789 Pine St, Villagetown',
    message: 'Interested in a product demo.',
    notes: '',
  },
];

const Contact = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [newContact, setNewContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    message: '',
    notes: '',
  });

  const [selectedContactId, setSelectedContactId] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddContact = () => {
    setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
    setNewContact({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      message: '',
      notes: '',
    });
  };

  const handleDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
    setSelectedContactId(null);
  };

  const handleAddNote = () => {
    setContacts(
      contacts.map((contact) =>
        contact.id === selectedContactId
          ? { ...contact, notes: `${contact.notes}\n${newContact.notes}` }
          : contact
      )
    );
    setNewContact({ ...newContact, notes: '' });
  };

  const handleSortContacts = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      const order = sortOrder === 'asc' ? 1 : -1;
      return a.firstName.localeCompare(b.firstName) * order;
    });
    setContacts(sortedContacts);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/6 bg-blue-200 text-blue-800 p-4">
        <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
        <ul>
          <li className="mb-2 text-2xl">Dashboard</li>
          <li className="mb-2 text-2xl">Members</li>
          <li className="mb-2 text-2xl">Products</li>
          <li className="mb-2 text-2xl">News</li>
          <li className="mb-2 text-2xl">Contacts</li>
          <li className="mb-2 text-2xl">Service</li>
          <li className="mb-2 text-2xl">Information</li>
          <li className="mb-2 text-2xl">Comments</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-5/6 p-4">
        <h2 className="text-3xl font-bold mb-4">Contact Management</h2>

        {/* Add Contact Form */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">Add New Contact</h3>
          <form>
            <label className="block mb-2 text-lg">First Name:</label>
            <input
              type="text"
              value={newContact.firstName}
              onChange={(e) =>
                setNewContact({ ...newContact, firstName: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2 text-lg">Last Name:</label>
            <input
              type="text"
              value={newContact.lastName}
              onChange={(e) =>
                setNewContact({ ...newContact, lastName: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2 text-lg">Email:</label>
            <input
              type="email"
              value={newContact.email}
              onChange={(e) =>
                setNewContact({ ...newContact, email: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2 text-lg">Phone Number:</label>
            <input
              type="tel"
              value={newContact.phoneNumber}
              onChange={(e) =>
                setNewContact({ ...newContact, phoneNumber: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2 text-lg">Address:</label>
            <input
              type="text"
              value={newContact.address}
              onChange={(e) =>
                setNewContact({ ...newContact, address: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2 text-lg">Message:</label>
            <textarea
              value={newContact.message}
              onChange={(e) =>
                setNewContact({ ...newContact, message: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            ></textarea>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
              onClick={handleAddContact}
            >
              Add Contact
            </button>
          </form>
        </div>

        {/* Contact List */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">Contact List</h3>
          <div className="mb-4">
            <label className="block mb-2 text-lg">Search:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full mb-2"
            onClick={handleSortContacts}
          >
            Sort Contacts {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
          </button>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="border px-4 py-2">{contact.id}</td>
                  <td className="border px-4 py-2">
                    {contact.firstName} {contact.lastName}
                  </td>
                  <td className="border px-4 py-2">{contact.email}</td>
                  <td className="border px-4 py-2">{contact.phoneNumber}</td>
                  <td className="border px-4 py-2">{contact.address}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-full mr-2"
                      onClick={() => handleDeleteContact(contact.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded-full"
                      onClick={() => setSelectedContactId(contact.id)}
                    >
                      Add Note
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Note Section */}
        {selectedContactId !== null && (
          <div>
            <h3 className="text-2xl font-bold mb-2">Add Note</h3>
            <textarea
              value={newContact.notes}
              onChange={(e) => setNewContact({ ...newContact, notes: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            ></textarea>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
              onClick={handleAddNote}
            >
              Add Note
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;

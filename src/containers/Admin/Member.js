import React, { useState } from 'react';

const initialAccounts = [
  {
    id: 1,
    username: 'admin1',
    email: 'admin1@example.com',
    banned: false,
  },
  {
    id: 2,
    username: 'admin2',
    email: 'admin2@example.com',
    banned: false,
  },
  {
    id: 3,
    username: 'admin3',
    email: 'admin3@example.com',
    banned: true,
  },
];

const AccountManagement = () => {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleBanAccount = (accountId) => {
    setAccounts(
      accounts.map((account) =>
        account.id === accountId ? { ...account, banned: !account.banned } : account
      )
    );
    setSelectedAccountId(null);
  };

  const handleDeleteAccount = (accountId) => {
    setAccounts(accounts.filter((account) => account.id !== accountId));
    setSelectedAccountId(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAccounts = accounts.filter(
    (account) =>
      account.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.email.toLowerCase().includes(searchTerm.toLowerCase())
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
        <h2 className="text-3xl font-bold mb-4">Account Management</h2>

        {/* Search Box */}
        <div className="mb-4">
          <label className="block mb-2 text-lg">Search:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border rounded mb-2"
          />
        </div>

        {/* Account List */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">Account List</h3>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAccounts.map((account) => (
                <tr key={account.id}>
                  <td className="border px-4 py-2">{account.id}</td>
                  <td className="border px-4 py-2">{account.username}</td>
                  <td className="border px-4 py-2">{account.email}</td>
                  <td className="border px-4 py-2">
                    {account.banned ? 'Banned' : 'Active'}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className={`${
                        account.banned ? 'bg-green-500' : 'bg-red-500'
                      } text-white px-2 py-1 rounded-full mr-2`}
                      onClick={() => handleBanAccount(account.id)}
                    >
                      {account.banned ? 'Unban' : 'Ban'}
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-full"
                      onClick={() => handleDeleteAccount(account.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
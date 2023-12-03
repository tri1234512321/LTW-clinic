import React, { useState } from 'react';

const Home = () => {
  const [adminInfo, setAdminInfo] = useState({
    avatar: 'https://placekitten.com/150/150', // Replace with the actual URL of your avatar image
    fullName: 'John Doe',
    dob: 'January 1, 1990',
    address: '123 Main Street, Cityville',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    role: 'Admin',
    joinedDate: 'January 15, 2020',
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [isChangePasswordMode, setIsChangePasswordMode] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for input fields
  const [fullName, setFullName] = useState(adminInfo.fullName);
  const [dob, setDob] = useState(adminInfo.dob);
  const [address, setAddress] = useState(adminInfo.address);
  const [email, setEmail] = useState(adminInfo.email);
  const [phone, setPhone] = useState(adminInfo.phone);

  const handleProfileUpdate = () => {
    // Implement logic for updating the profile
    setAdminInfo({
      ...adminInfo,
      fullName,
      dob,
      address,
      email,
      phone,
    });
    setIsEditMode(false);
  };

  const handleChangePassword = () => {
    setIsChangePasswordMode(true);
  };

  const handleSavePasswordChange = () => {
    // Implement logic to save the new password
    if (newPassword === confirmPassword) {
      console.log('Password changed to:', newPassword);
      setIsChangePasswordMode(false);
      setNewPassword('');
      setConfirmPassword('');
    } else {
      alert('Password and Confirm Password do not match.');
    }
  };

  const handleCancelPasswordChange = () => {
    setIsChangePasswordMode(false);
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleDeleteAccount = () => {
    // Implement logic for deleting the account
    console.log('Account deleted');
  };

  return (
    <div className="flex h-screen">
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

      <div className="w-5/6 p-4">
        <h2 className="text-3xl font-bold mb-4">Admin Information</h2>
        <div className="flex items-center mb-4">
          <img
            src={adminInfo.avatar}
            alt="Admin Avatar"
            className="rounded-full mr-4"
            style={{ width: '150px', height: '150px' }}
          />
          <div>
            <h3 className="text-2xl font-bold mb-2">{adminInfo.fullName}</h3>
            <p className="text-xl text-gray-600">{adminInfo.role}</p>
          </div>
        </div>
        <table className="table-auto w-full">
          <tbody>
            <tr>
              <td className="text-left py-2">Date of Birth:</td>
              <td className="text-left py-2">
                {isEditMode ? (
                  <input
                    type="text"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  adminInfo.dob
                )}
              </td>
            </tr>
            <tr>
              <td className="text-left py-2">Address:</td>
              <td className="text-left py-2">
                {isEditMode ? (
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  adminInfo.address
                )}
              </td>
            </tr>
            <tr>
              <td className="text-left py-2">Email:</td>
              <td className="text-left py-2">
                {isEditMode ? (
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  adminInfo.email
                )}
              </td>
            </tr>
            <tr>
              <td className="text-left py-2">Phone:</td>
              <td className="text-left py-2">
                {isEditMode ? (
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  adminInfo.phone
                )}
              </td>
            </tr>
            <tr>
              <td className="text-left py-2">Joined Date:</td>
              <td className="text-left py-2">{adminInfo.joinedDate}</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4">
          {isEditMode ? (
            <>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full mr-4"
                onClick={handleProfileUpdate}
              >
                Update Profile
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-full"
                onClick={() => setIsEditMode(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full mr-4"
                onClick={() => setIsEditMode(true)}
              >
                Edit Profile
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full"
                onClick={handleChangePassword}
              >
                Change Password
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-full ml-4"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
            </>
          )}
        </div>

        {isChangePasswordMode && (
          <div className="mt-4">
            <label className="block mb-2 text-lg">New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <label className="block mt-2 mb-2 text-lg">Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <div className="mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-full mr-4"
                onClick={handleSavePasswordChange}
              >
                Save Password
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-full"
                onClick={handleCancelPasswordChange}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

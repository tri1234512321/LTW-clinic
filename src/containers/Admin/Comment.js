import React, { useState } from 'react';

const initialComments = [
  {
    id: 1,
    username: 'user1',
    content: 'This is a great product!',
    confirmed: true,
  },
  {
    id: 2,
    username: 'user2',
    content: 'I have a question about your services.',
    confirmed: false,
  },
  {
    id: 3,
    username: 'user3',
    content: 'Please provide more information.',
    confirmed: true,
  },
];

const CommentManagement = () => {
  const [comments, setComments] = useState(initialComments);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleConfirmComment = (commentId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId ? { ...comment, confirmed: true } : comment
      )
    );
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
    setSelectedCommentId(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredComments = comments.filter((comment) =>
    comment.content.toLowerCase().includes(searchTerm.toLowerCase())
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
        <h2 className="text-3xl font-bold mb-4">Comment Management</h2>

        {/* Comment List */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">Comment List</h3>
          <div className="mb-4">
            <label className="block mb-2 text-lg">Search:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-2 border rounded mb-2"
            />
          </div>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Content</th>
                <th className="px-4 py-2">Confirmed</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredComments.map((comment) => (
                <tr key={comment.id}>
                  <td className="border px-4 py-2">{comment.id}</td>
                  <td className="border px-4 py-2">{comment.username}</td>
                  <td className="border px-4 py-2">{comment.content}</td>
                  <td className="border px-4 py-2">
                    {comment.confirmed ? 'Yes' : 'No'}
                  </td>
                  <td className="border px-4 py-2">
                    {!comment.confirmed && (
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded-full mr-2"
                        onClick={() => handleConfirmComment(comment.id)}
                      >
                        Confirm
                      </button>
                    )}
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-full"
                      onClick={() => handleDeleteComment(comment.id)}
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

export default CommentManagement;
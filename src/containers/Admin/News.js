import React, { useState } from 'react';

const initialNews = [
  {
    id: 1,
    title: 'Breaking News 1',
    content: 'This is the content of breaking news 1.',
  },
  {
    id: 2,
    title: 'Breaking News 2',
    content: 'This is the content of breaking news 2.',
  },
  {
    id: 3,
    title: 'Breaking News 3',
    content: 'This is the content of breaking news 3.',
  },
];

const NewsManagement = () => {
  const [news, setNews] = useState(initialNews);
  const [selectedNewsId, setSelectedNewsId] = useState(null);
  const [newNews, setNewNews] = useState({
    title: '',
    content: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddNews = () => {
    setNews([...news, { ...newNews, id: news.length + 1 }]);
    setNewNews({ title: '', content: '' });
  };

  const handleEditNews = (newsId) => {
    setSelectedNewsId(newsId);
  };

  const handleUpdateNews = () => {
    setNews(
      news.map((n) =>
        n.id === selectedNewsId ? { ...n, ...newNews } : n
      )
    );
    setSelectedNewsId(null);
  };

  const handleDeleteNews = (newsId) => {
    setNews(news.filter((n) => n.id !== newsId));
    setSelectedNewsId(null);
  };

  const handleSearchNews = () => {
    // Logic for searching news based on searchTerm
    // You can customize this based on your specific requirements
    const filteredNews = initialNews.filter(
      (n) =>
        n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        n.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setNews(filteredNews);
  };

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
        <h2 className="text-3xl font-bold mb-4">News Management</h2>

        {/* Search Bar */}
        <div className="mb-4">
          <label className="block mb-2 text-lg">Search:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded mb-2"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
            onClick={handleSearchNews}
          >
            Search
          </button>
        </div>

        {/* News List */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">News List</h3>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Content</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {news.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">
                    {selectedNewsId === item.id ? (
                      <input
                        type="text"
                        value={newNews.title}
                        onChange={(e) =>
                          setNewNews({ ...newNews, title: e.target.value })
                        }
                        className="w-full p-2 border rounded mb-2"
                      />
                    ) : (
                      item.title
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {selectedNewsId === item.id ? (
                      <textarea
                        value={newNews.content}
                        onChange={(e) =>
                          setNewNews({ ...newNews, content: e.target.value })
                        }
                        className="w-full p-2 border rounded mb-2"
                      ></textarea>
                    ) : (
                      item.content
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {selectedNewsId === item.id ? (
                      <>
                        <button
                          className="bg-green-500 text-white px-2 py-1 rounded-full mr-2"
                          onClick={handleUpdateNews}
                        >
                          Save
                        </button>
                        <button
                          className="bg-gray-500 text-white px-2 py-1 rounded-full"
                          onClick={() => setSelectedNewsId(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded-full mr-2"
                          onClick={() => handleEditNews(item.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded-full"
                          onClick={() => handleDeleteNews(item.id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* Add News Form */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Add News</h3>
          <form>
            <label className="block mb-2 text-lg">Title:</label>
            <input
              type="text"
              value={newNews.title}
              onChange={(e) =>
                setNewNews({ ...newNews, title: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2 text-lg">Content:</label>
            <textarea
              value={newNews.content}
              onChange={(e) =>
                setNewNews({ ...newNews, content: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            ></textarea>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
              onClick={handleAddNews}
            >
              Add News
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsManagement;

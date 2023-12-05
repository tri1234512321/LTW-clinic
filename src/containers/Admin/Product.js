import React, { useState } from 'react';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Medicine A', price: 10.99, quantity: 50, image: 'https://cdn.tgdd.vn/Products/Images/10244/153522/panadol-500mg-thumb-1-600x600.jpg', highlighted: false },
    { id: 2, name: 'Medicine B', price: 20.99, quantity: 30, image: 'https://cdn.tgdd.vn/Products/Images/10244/152728/panadol-cold-flu-gsk-2-1.jpg', highlighted: false },
    { id: 3, name: 'Medicine C', price: 15.99, quantity: 25, image: 'https://cdn.tgdd.vn/Products/Images/10244/129157/panadol-extra-hop180v-2-1.jpg', highlighted: false },
    // Add more products as needed
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    quantity: 0,
    image: '',
  });

  const [editingProductId, setEditingProductId] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1, highlighted: false }]);
    setNewProduct({ name: '', price: 0, quantity: 0, image: '' });
  };

  const handleEditProduct = (productId) => {
    setEditingProductId(productId);
  };

  const handleUpdateProduct = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId ? { ...product, ...newProduct } : product
      )
    );
    setEditingProductId(null);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleToggleHighlight = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId ? { ...product, highlighted: !product.highlighted } : product
      )
    );
  };

  const filteredProducts = products.filter((product) => {
    const categoryFilter = selectedCategory ? product.category === selectedCategory : true;
    const searchFilter = searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return categoryFilter && searchFilter;
  });

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
        <h2 className="text-4xl font-bold mb-4">Product Management</h2>

        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">Product List</h3>
          <div className="mb-4">
            <label className="block mb-2 text-lg">Search:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />

            <label className="block mb-2 text-lg">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border rounded mb-2"
            >
              <option value="">All Categories</option>
              {/* Add categories here */}
            </select>
          </div>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Highlight</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="border px-4 py-2">{product.id}</td>
                  <td className="border px-4 py-2">
                    {editingProductId === product.id ? (
                      <input
                        type="text"
                        value={newProduct.name}
                        onChange={(e) =>
                          setNewProduct({ ...newProduct, name: e.target.value })
                        }
                        className="w-full p-2 border rounded mb-2"
                      />
                    ) : (
                      product.name
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingProductId === product.id ? (
                      <input
                        type="number"
                        value={newProduct.price}
                        onChange={(e) =>
                          setNewProduct({ ...newProduct, price: e.target.value })
                        }
                        className="w-full p-2 border rounded mb-2"
                      />
                    ) : (
                      `$${product.price}`
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingProductId === product.id ? (
                      <input
                        type="number"
                        value={newProduct.quantity}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            quantity: e.target.value,
                          })
                        }
                        className="w-full p-2 border rounded mb-2"
                      />
                    ) : (
                      product.quantity
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingProductId === product.id ? (
                      <input
                        type="text"
                        value={newProduct.image}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            image: e.target.value,
                          })
                        }
                        className="w-full p-2 border rounded mb-2"
                      />
                    ) : (
                      product.image && (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 object-cover rounded-full"
                        />
                      )
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className={`${
                        product.highlighted
                          ? 'bg-yellow-500'
                          : 'bg-gray-300'
                      } text-white px-2 py-1 rounded-full`}
                      onClick={() => handleToggleHighlight(product.id)}
                    >
                      ★
                    </button>
                  </td>
                  <td className="border px-4 py-2">
                    {editingProductId === product.id ? (
                      <>
                        <button
                          className="bg-green-500 text-white px-2 py-1 rounded-full mr-2"
                          onClick={() => handleUpdateProduct(product.id)}
                        >
                          Save
                        </button>
                        <button
                          className="bg-gray-500 text-white px-2 py-1 rounded-full"
                          onClick={() => setEditingProductId(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded-full mr-2"
                          onClick={() => handleEditProduct(product.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded-full"
                          onClick={() => handleDeleteProduct(product.id)}
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

        <div>
          <h3 className="text-2xl font-bold mb-2">Add New Product</h3>
          <form>
            <label className="block mb-2 text-lg">Name:</label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2 text-lg">Price:</label>
            <input
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2 text-lg">Quantity:</label>
            <input
              type="number"
              value={newProduct.quantity}
              onChange={(e) =>
                setNewProduct({ ...newProduct, quantity: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <label className="block mb-2 text-lg">Image URL:</label>
            <input
              type="text"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              className="w-full p-2 border rounded mb-4"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
              onClick={handleAddProduct}
            >
              Add Product
            </button>
          </form>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Highlighted Products</h2>
          <ul>
            {products
              .filter((product) => product.highlighted)
              .map((highlightedProduct) => (
                <li key={highlightedProduct.id} className="mb-2">
                  {highlightedProduct.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
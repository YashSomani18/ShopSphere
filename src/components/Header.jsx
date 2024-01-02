import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Cart from "../assets/Cart.png";

const Header = ({ cartItems, setSortOrder }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  

  const handleCart = () => navigate("/cart");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleSearch = () => {
    fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) =>
        navigate("/search-results", { state: { products: data.products } })
      )
      .catch((error) => console.error("Error fetching search results:", error));
  };

  const handleSortChange = (e) => {
    // Call the function passed from App.js
    setSortOrder(e.target.value);
  };

  const goToHome = () => navigate("/home");

  return (
    <header className="flex justify-between items-center bg-gray-100 p-4">
      <img src={Logo} alt="Logo" className="w-20" onClick={goToHome} />
      <div className="flex items-center">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded mx-2"
          placeholder="Search products..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded"
        >
          🔍
        </button>
        <select
          onChange={handleSortChange}
          className="mx-8 p-3 border border-gray-300 rounded"
        >
          <option value="">Select Sort</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
      <div className="flex items-center">
        <div onClick={handleCart} className="cursor-pointer mr-4 relative">
          <img src={Cart} alt="Cart" className="w-8 h-8" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
              {cartItems.length}
            </span>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;

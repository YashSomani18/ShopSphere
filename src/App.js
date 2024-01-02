import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import SearchResultsPage from "./components/SearchResultsPage";
import MainPage from "./components/MainPage";
import ProductDetails from "./components/ProductDetails";
import CartPage from "./components/CartPage";
import Header from "./components/Header";

function App() {
  const isLoggedIn = localStorage.getItem("token");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const [sortOrder, setSortOrder] = useState("");

  return (
    <Router>
      {isLoggedIn && (
        <Header cartItems={cartItems} setSortOrder={setSortOrder} />
      )}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={<MainPage addToCart={addToCart} sortOrder={sortOrder} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/home" : "/login"} />}
        />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
        <Route
          path="/search-results"
          element={<SearchResultsPage addToCart={addToCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

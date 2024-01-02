import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div
      className="border rounded-md shadow-lg p-4 bg-white"
      onClick={handleProductClick}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-2">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">${product.price}</span>
          <button 
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

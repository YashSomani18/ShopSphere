import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="p-4 flex flex-col md:flex-row max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <img
        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="p-4 md:w-1/2">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">${product.price}</span>
          <button
            className="px-3 py-1 bg-blue-500 text-white text-xs font-bold uppercase rounded hover:bg-blue-600"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

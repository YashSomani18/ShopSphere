import React from "react";

const CartPage = ({ cartItems }) => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="flex flex-col space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center border-b pb-4"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-1/2 object-contain"
            />
            <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <span className="text-xl font-bold">${item.price}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
          Proceed Further
        </button>
      </div>
    </div>
  );
};

export default CartPage;

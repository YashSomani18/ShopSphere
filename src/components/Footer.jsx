import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-1">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h5 className="text-xl font-bold">ShopSphere</h5>
          </div>
        </div>
        <div className="text-center text-sm my-4">
          © 2023 ShopSphere. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

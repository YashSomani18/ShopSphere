import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';

const SearchResultsPage = ({ addToCart }) => {
  const location = useLocation();
  const { products } = location.state || {};

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products?.map(product => (
          <ProductCard key={product.id} product={product} addToCart={ addToCart } />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;

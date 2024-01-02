import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; 

const Container = ({ addToCart, sortOrder }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        let sortedProducts = data.products;
        if (sortOrder === 'lowToHigh') {
          sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'highToLow') {
          sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        }
        setProducts(sortedProducts);
      });
  }, [sortOrder]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart}/>
        ))}
      </div>
    </div>
  );
};

export default Container;

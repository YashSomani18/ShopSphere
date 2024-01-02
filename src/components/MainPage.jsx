import React from 'react';

import Footer from './Footer';
import Container from './Container';

const MainPage = ({ addToCart, sortOrder }) => {
  return (
    <>
      <Container addToCart={addToCart} sortOrder={sortOrder} />
      <Footer />
    </>
  );
};

export default MainPage;

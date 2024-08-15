import React from 'react';
import Slideshow from './components/Slideshow';
import ProductDescription from './components/ProductDescription';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';
import './App.css'; 

const App = () => {
  const images = [
    'link-ke-gambar1.jpg',
    'link-ke-gambar2.jpg',
    'link-ke-gambar3.jpg'
  ];

  return (
    <div className="App">
      <Slideshow images={images} />
      <ProductDescription />
      <ProductCatalog />
      <Footer />
    </div>
  );
};

export default App;

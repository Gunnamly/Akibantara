import React from 'react';
import Navbar from './components/navbar';
import Slideshow from './components/Slideshow';
import './App.css';

const App = () => {
  const images = [
    'link-ke-gambar1.jpg',
    'link-ke-gambar2.jpg',
    'link-ke-gambar3.jpg'
  ];

  return (
    <div className="App">
      <Navbar /> {}
      <Slideshow images={images} />
    </div>
  );
};

export default App;

import React from 'react';
import './ProductCatalog.css';

import catalog1 from '../images/catalog1.png';
import catalog2 from '../images/catalog2.png';
import catalog3 from '../images/catalog3.png';

const ProductCatalog = () => {
  const products = [
    { id: 1, name: 'God Of The Sea', description: 'Deskripsi God Of The Sea', price: 'Rp. 99.999',image: catalog1 },
    { id: 2, name: 'Malioboro', description: 'Deskripsi Malioboro', price: 'Rp. 99.999',image: catalog2 },
    { id: 3, name: 'Samurai', description: 'Deskripsi Samurai', price: 'Rp. 99.999',image: catalog3 },
  ];

  return (
    <div className="product-catalog">
      <h2>Katalog Produk</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p2>{product.price}</p2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;

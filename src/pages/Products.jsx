import React, { useState } from 'react';
import Data from '../data.json';
import Product from '../components/Product';

export const Products = () => {
  const [products, setProducts] = useState(Data.products);

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((p, index) => (
          <Product key={index} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Products;

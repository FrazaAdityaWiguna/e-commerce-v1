import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';

const products = [
  { id: 1, name: 'ASUS', desc: 'Laptop asus', price: '$5' },
  { id: 2, name: 'car', desc: 'Sport Car', price: '$20' },
];

const Products = () => {
  return (
    <main>
      <Grid container spacing={4} justify='center'>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

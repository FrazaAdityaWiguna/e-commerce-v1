import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';

import useStyles from './styles';

const products = [
  { id: 1, name: 'ASUS', desc: 'Laptop asus', price: '$5', image: 'https://placeimg.com/640/480/tech' },
  { id: 2, name: 'Lenovo', desc: 'Flagship', price: '$20', image: 'https://placeimg.com/640/480/tech' },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
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

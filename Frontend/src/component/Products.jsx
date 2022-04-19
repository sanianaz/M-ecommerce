import React from "react";

import Grid from "@material-ui/core/Grid";
//import { Grid} from "@material-ui/core"
import Product from "./Products/Product";
import useStyles from "./styles";
// const products = [
//   {
//     id: 1,
//     itemName: "Lancome",
//     category: "Lipstick",
//     price: 200,
//     image:
//       "https://images.unsplash.com/photo-1555050455-f96634b5cba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//   },
//   {
//     id: 2,
//     itemName: "Chanel",
//     category: "Perfume",
//     price: 500,
//     image:
//       "https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//   },
//   {
//     id: 3,
//     itemName: "Big glow",
//     category: "Cream",
//     price: 200,
//     image:
//       "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
//   },
// ];

const Products = ({ products }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={2} height={20}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;

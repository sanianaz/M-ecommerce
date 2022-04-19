import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product }) => {
  console.log(product);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.itemName}
      ></CardMedia>

      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.itemName}
          </Typography>

          <Typography variant="body1">{product.price} kr</Typography>
        </div>
        <Typography variant="body1" color="textSecondary">
          {product.category}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

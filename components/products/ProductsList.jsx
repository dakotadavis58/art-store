import { Grid } from "@mui/material";
import React from "react";
import Card from "../Card";

function ProductsList({ products }) {
  return (
    <Grid container spacing={2} className=" py-5">
      {products.map((product) => {
        return (
          <Grid
            className=""
            justifyContent="space-between"
            alignItems="center"
            key={product.name}
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
          >
            <Card product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ProductsList;

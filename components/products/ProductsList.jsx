import React from "react";
import Card from "../Card";

function ProductsList({ products }) {
  return (
    <div className="py-5 flex flex-col items-center gap-4">
      {products.map((product) => {
        return <Card key={product.name} product={product} />;
      })}
    </div>
  );
}

export default ProductsList;
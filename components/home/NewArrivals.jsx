import React from "react";
import Image from "next/image";
import Button from "../../components/Button";
import Card from "../../components/Card";

function NewArrivals({ newArrivals, products }) {
  return (
    <div className="w-full h-full">
      <h2 className="text-3xl font-bold text-center mb-10">
        {newArrivals.title}
      </h2>
      <div className="flex flex-col md:flex-row items-center md:flex-wrap justify-between gap-8">
        {products.map((product) => {
          return <Card newArrivals key={product.name} product={product} />;
        })}
      </div>
    </div>
  );
}

export default NewArrivals;

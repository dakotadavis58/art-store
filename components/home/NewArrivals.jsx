import React from "react";
import Image from "next/image";
import Button from "../../components/Button";
import Card from "../../components/Card";

function NewArrivals({ newArrivals, products }) {
  return (
    <section className="w-full">
      <h1 className="text-3xl font-bold text-center my-10">
        {newArrivals.title}
      </h1>
      <div className="flex justify-between gap-8">
        {products.map((product) => {
          return <Card newArrivals key={product.name} product={product} />;
        })}
      </div>
    </section>
  );
}

export default NewArrivals;

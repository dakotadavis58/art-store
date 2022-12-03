import React from "react";
import Image from "next/image";
import Button from "../../components/Button";
import Card from "../../components/Card";

function NewArrivals({ newArrivals, products }) {
  return (
    <section>
      <h1 className="text-3xl font-bold text-center my-10">
        {newArrivals.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {
          return <Card product={product} />;
        })}
      </div>
    </section>
  );
}

export default NewArrivals;

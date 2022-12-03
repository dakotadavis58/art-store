import React from "react";
import Image from "next/image";
import img from "/public/assets/product.jpg";
import Button from "../../components/Button";

function NewArrivals({ newArrivals, products }) {
  return (
    <section>
      <h1 className="text-3xl font-bold text-center my-10">
        {newArrivals.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {
          const { id, name, price } = product;
          return (
            <div key={id} className="flex flex-col items-center justify-center">
              <Image src={img} alt={name} width={300} height={300} />

              <h2 className="text-xl font-bold my-2">{name}</h2>
              <p className="text-lg font-bold my-2">${price}</p>

              <Button text={"Add To Cart"}></Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default NewArrivals;

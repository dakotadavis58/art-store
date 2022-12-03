import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import img from "/public/assets/product.jpg";

function Card({ product }) {
  const { id, slug, name, price, description } = product;
  return (
    <article key={id} className="card">
      <Link href={`/products/${slug}`}>
        <Image
          src={img}
          alt={name}
          height={300}
          width={300}
          style={{ borderTopLeftRadius: "2px", borderTopRightRadius: "2px" }}
        />
        <div className="p-2 flex flex-col gap-1  items-start">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm font-normal ">{description}</p>
          <p className="text-lg font-medium">${price}</p>

          <Button className="" sm text={"+"}></Button>
        </div>
      </Link>
    </article>
  );
}

export default Card;

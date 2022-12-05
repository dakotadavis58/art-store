import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import img from "/public/assets/product.jpg";

function Card({ product, newArrivals }) {
  const { id, slug, name, price, description } = product;
  // hover:border-2 hover:border-primary
  return (
    <article
      key={id}
      className=""
      // className={`transition-all border-2 border-transparent rounded ${
      //   newArrivals ? "newArrivals" : ""
      // }`}
    >
      <div>
        <Link href={`/products/${slug}`}>
          <Image
            src={img}
            alt={name}
            height={300}
            width={300}
            style={{ borderTopLeftRadius: "2px", borderTopRightRadius: "2px" }}
          />

          <div className="p-2 flex flex-col gap-1 items-start max-w-[18rem]">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm font-normal ">{description}</p>
            <p className="text-lg font-medium">${price}</p>
          </div>
        </Link>
      </div>
      <div className="ml-2">
        <Button className="" sm text={"+"}></Button>
      </div>
    </article>
  );
}

export default Card;

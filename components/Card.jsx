import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import img from "/public/assets/product.jpg";

function Card({ product, newArrivals }) {
  const { id, slug, name, price, description, reviews } = product;
  const rating =
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;

  return (
    <article
      key={id}
      className="transition-all rounded-md card bg-neutral-800 border-2 border-transparent hover:border-opacity-10 pb-2"
    >
      <div className=" ">
        <Link href={`/products/${slug}`}>
          <Image
            src={img}
            alt={name}
            height={300}
            width={300}
            className="rounded-t-md"
          />

          <div className="p-2 flex flex-col gap-1 items-start max-w-[18rem]">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm font-normal ">{description}</p>
            <div className="flex justify-center items-center">
              <Rating
                className="text-primary"
                name="read-only"
                value={rating}
                readOnly
                precision={0.25}
              />
              {reviews.length > 0 && (
                <p className="text-sm font-normal ml-2">({reviews.length})</p>
              )}
            </div>
            <div className="flex items-center gap-4">
              <p className="text-lg font-medium">${price}</p>
              <p className="text-gray-500 text-sm">
                + Shipping
                {/* <del className="text-sm font-normal ml-2">$100</del> */}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="ml-2">
        <Button className="" rounded text={"+ Add To Cart"}></Button>
      </div>
    </article>
  );
}

export default Card;

import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import img from "/public/assets/product.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Card({ product, newArrivals, loading }) {
  const [showLike, setShowLike] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const { id, slug, name, price, description, reviews } = product;
  const rating =
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;
  ("");
  const handleLike = (e) => {
    e.preventDefault();
    setLiked(!liked);
  };
  return (
    <article
      key={id}
      onMouseEnter={() => setShowLike(true)}
      onMouseLeave={() => setShowLike(false)}
      className={`relative max-w-fit transition-all rounded-md card bg-neutral-800 border-2 border-transparent hover:shadow-2xl hover:drop-shadow-2xl pb-2 ${
        loading ? "animate-pulse" : ""
      }`}
    >
      <div className="absolute top-0 right-0 m-2">
        <button
          className={`${!showLike && "hidden"}`}
          onClick={(e) => handleLike(e)}
        >
          {liked ? (
            <FavoriteIcon className="text-3xl text-primary" />
          ) : (
            <FavoriteBorderIcon className="text-3xl text-primary" />
          )}
        </button>
      </div>
      <div className="">
        <Link href={`/products/${slug}`}>
          <Image
            src={img}
            alt={name}
            height={260}
            width={260}
            className="rounded-t-md"
          />

          <div className="p-2 flex flex-col gap-1 items-start max-w-[18rem]">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm font-normal ">{description}</p>
            <div className="flex justify-center items-center">
              <Rating
                className="text-primary-main"
                name="read-only"
                value={rating}
                readOnly
                precision={0.25}
                icon={
                  <FavoriteIcon
                    className="text-primary-main"
                    fontSize={"inherit"}
                  />
                }
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
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
        <Button className="" secondary rounded text={"+ Add To Cart"}></Button>
      </div>
    </article>
  );
}

export default Card;

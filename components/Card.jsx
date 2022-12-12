import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Button from "./Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Card({ product, newArrivals, loading }) {
  const [showLike, setShowLike] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const { id, slug, name, price, description, reviews, image } = product;
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
      onMouseEnter={() => {
        setShowLike(true);
      }}
      onMouseLeave={() => setShowLike(false)}
      className={`relative flex-grow basis-1/5 max-w-1/5 sm:flex-grow  transition-all rounded-md card bg-neutral-800 border-2 border-transparent hover:shadow-2xl hover:drop-shadow-2xl pb-2 ${
        loading ? "animate-pulse" : ""
      }`}
    >
      <div className="absolute top-0 right-0 m-2  z-50">
        <button
          className={`${showLike ? "inline-block" : "hidden"}`}
          onClick={(e) => handleLike(e)}
        >
          {liked ? (
            <FavoriteIcon className="text-3xl text-primary-main" />
          ) : (
            <FavoriteBorderIcon className="text-3xl text-primary-main" />
          )}
        </button>
      </div>
      <div className="">
        <Link href={`/products/${slug}`}>
          <div className=" overflow-hidden rounded-md ">
            <div className="image-container aspect-4/3 sm:max-h-[9rem] md:[11rem] lg:max-h-[14rem]">
              <Image src={image} alt={name} fill className=" imageContain" />
            </div>
          </div>

          <div className="p-2 flex flex-col gap-1 items-start max-w-[18rem]">
            <h2 className="text-xl font-bold line-clamp-1">{name}</h2>
            <p className="text-sm font-normal line-clamp-1">{description}</p>
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
                emptyIcon={
                  <FavoriteBorderIcon
                    className="text-neutral-400"
                    fontSize="inherit"
                  />
                }
              />
              {reviews.length > 0 && (
                <p className="text-sm font-normal ml-2">({reviews.length})</p>
              )}
            </div>
            <div className="flex items-center gap-4">
              <p className="text-lg font-medium">
                ${(Math.floor(price * 100) / 100).toFixed(2)}
              </p>
              {/* <del className="text-sm font-normal ml-2">$100</del> */}
              <p className="text-gray-500 text-sm">+ Shipping</p>
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

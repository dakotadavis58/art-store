import Head from "next/head";
import React from "react";
import { useSiteData } from "../hooks/siteContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, subFromCart } from "../data/redux/cartSlice";
import Image from "next/image";
import Button from "../components/Button";

function Cart() {
  const data = useSiteData();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cart: cartseo } = data.seo;
  const { title, description, keywords } = cartseo;
  return (
    <div className="flex flex-col items-center gap-2 px-10">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <h1 className="text-4xl">Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {cart.cart.map((item) => {
          return (
            <div key={item.id} className="grid grid-cols-5 gap-2">
              <div className="max-w-[5rem]">
                <Image
                  className="imageContain"
                  alt={item.name}
                  src={item.image}
                  fill
                />
              </div>
              <h1>{item.name}</h1>
              <h1>{item.price}</h1>
              <h1>{item.quantity}</h1>

              <div>
                <Button
                  onClick={() => {
                    dispatch(addToCart(item));
                  }}
                >
                  +
                </Button>
                <Button
                  onClick={() => {
                    dispatch(subFromCart(item));
                  }}
                >
                  -
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;

import Head from "next/head";
import React from "react";
import { useSiteData } from "../hooks/SiteContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteItem, subFromCart } from "../data/redux/cartSlice";
import Image from "next/image";
import Button from "../components/utils/Button";
import { formatToDollar } from "../utils/functions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Cart() {
  const tax = 0.05;
  const shipping = 5;
  const data = useSiteData();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { cart } = useSelector((state) => state.cart);
  const router = useRouter();
  const { cart: cartseo } = data.seo;
  const { title, description, keywords } = cartseo;

  const handleCheckout = () => {
    if (cart.cartItems.length === 0) {
      // show message if cart is empty

      console.log("cart is empty, fix to show toast");
      return;
    } else if (session) {
      router.push("/shipping");
    } else {
      router.push({ pathname: "/signin", query: { redirect: "shipping" } });
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 px-10">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <h1 className="text-4xl p-6">Cart</h1>
      {/* items in cart */}
      <div className="flex gap-20">
        <div className="grid grid-cols-1 gap-4">
          {cart.cartItems.length > 0 ? (
            cart.cartItems.map((item) => {
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
                  <div className="flex items-center">
                    <h2>{item.name}</h2>
                  </div>
                  <div className="flex items-center">
                    <h2>{formatToDollar(item.price)}</h2>
                  </div>
                  <div className="flex items-center">
                    <h2>{item.quantity}</h2>
                  </div>

                  <div className="flex gap-2 items-center">
                    <Button
                      className="bg-green-500"
                      onClick={() => {
                        dispatch(addToCart(item));
                      }}
                    >
                      +
                    </Button>
                    <Button
                      className="bg-blue-500"
                      onClick={() => {
                        dispatch(subFromCart(item));
                      }}
                    >
                      -
                    </Button>
                    <Button
                      className="bg-red-500"
                      onClick={() => {
                        dispatch(deleteItem(item));
                      }}
                    >
                      X
                    </Button>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>Cart is empty</h2>
          )}
        </div>
        {/* summary panel */}
        <div>
          <h2>Summary</h2>
          {/* subtotal */}
          <h2>
            Subtotal:{" "}
            {formatToDollar(
              cart.cartItems.reduce((acc, item) => {
                return acc + item.price * item.quantity;
              }, 0)
            )}
          </h2>
          {/* taxes */}
          <h2>
            Tax:{" "}
            {formatToDollar(
              cart.cartItems.reduce((acc, item) => {
                return acc + item.price * item.quantity * tax;
              }, 0)
            )}
          </h2>
          {/* shipping */}
          <h2>Shipping: {formatToDollar(shipping)}</h2>
          {/* total */}
          <h2>
            Total:{" "}
            {formatToDollar(
              cart.cartItems.reduce((acc, item) => {
                return (
                  acc +
                  item.price * item.quantity +
                  item.price * item.quantity * tax
                );
              }, 0)
            )}
          </h2>

          <Button primary onClick={handleCheckout}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

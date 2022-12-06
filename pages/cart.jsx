import Head from "next/head";
import React from "react";
import { useSiteData } from "../hooks/siteContext";

function Cart() {
  const data = useSiteData();
  const { cart } = data.seo;
  const { title, description, keywords } = cart;
  return (
    <div className="flex flex-col items-center gap-2 px-10">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <h1 className="text-4xl">Cart</h1>
      <p>stuff</p>
    </div>
  );
}

export default Cart;

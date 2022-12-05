import Head from "next/head";
import React from "react";
import { useSiteData } from "../hooks/siteContext";

function Cart() {
  const data = useSiteData();
  const { cart } = data.seo;
  const { title, description, keywords } = cart;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
    </div>
  );
}

export default Cart;

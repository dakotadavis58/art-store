import Head from "next/head";
import React from "react";
import { useSiteData } from "../../hooks/siteContext";

function Products() {
  const data = useSiteData();
  const { contact } = data.seo;
  const { title, description, keywords } = contact;
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

export default Products;

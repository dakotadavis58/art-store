import Head from "next/head";
import React from "react";
import FilterSortBar from "../../components/products/FilterSortBar";
import ProductsList from "../../components/products/ProductsList";
import { useSiteData } from "../../hooks/siteContext";

function Products() {
  const data = useSiteData();
  const { products } = data;
  const { products: productsSEO } = data.seo;
  const { title, description, keywords } = productsSEO;
  return (
    <div className="w-full h-full px-10">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <FilterSortBar />
      <ProductsList products={products} />
    </div>
  );
}

export default Products;

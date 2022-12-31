import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useSiteData } from "../hooks/siteContext";
import AddProduct from "../components/admin/AddProduct";
import Image from "next/image";
import ProductsTable from "../components/admin/ProductsTable";

function Admin() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("allProducts");
  const siteData = useSiteData();
  const { products: dummyProducts } = siteData;

  const openTab = (e) => {
    setTab(e.target.id);
    console.log(tab);
  };

  useEffect(() => {
    try {
      setProducts(dummyProducts);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [dummyProducts]);

  return (
    <div className="">
      <h1 className="text-center text-3xl font-medium">Admin</h1>
      <div>
        {/* Tabs that will have each function an admin will want to do */}
        <div className="tab flex flex-col lg:absolute top-24  md:left-10">
          <button
            id="allProducts"
            className="tablinks p-2 pt-0"
            onClick={(e) => openTab(e)}
          >
            All Products
          </button>
          <button
            id="addProduct"
            className="tablinks p-2"
            onClick={(e) => openTab(e)}
          >
            Add Product
          </button>
          <button
            id="allOrders"
            className="tablinks p-2"
            onClick={(e) => openTab(e)}
          >
            All Orders
          </button>
        </div>
        <div className={`${tab === "allProducts" ? "flex" : "hidden"}`}>
          <ProductsTable loading={loading} products={products} />
        </div>
        <div className={`${tab === "addProduct" ? "flex" : "hidden"}`}>
          <AddProduct />
        </div>
      </div>
    </div>
  );
}

export default Admin;

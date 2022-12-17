import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useSiteData } from "../hooks/siteContext";
import AddProduct from "../components/admin/AddProduct";
import Image from "next/image";

function Admin() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteData = useSiteData();
  const { products: dummyProducts } = siteData;

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
      <h1>Admin</h1>
      <div>
        <h2>Products</h2>
        <table className="bg-neutral-800">
          <thead>
            <tr className="">
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Featured</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td>Loading...</td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>
                    <div className="max-w-[5rem]">
                      <Image
                        className="imageContain"
                        alt={product.name}
                        src={product.image}
                        fill
                      />
                    </div>
                  </td>
                  <td>{product.category}</td>
                  <td>{product.stock}</td>
                  <td>{product.featured ? "Yes" : "No"}</td>
                  <td>
                    <Button primary>Edit</Button>
                    <Button outline>Delete</Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div>
          <AddProduct />
        </div>
      </div>
    </div>
  );
}

export default Admin;

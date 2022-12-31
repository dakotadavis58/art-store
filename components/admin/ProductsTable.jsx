import Image from "next/image";
import React from "react";
import Button from "../Button";

function ProductsTable({ loading, products }) {
  return (
    <div>
      <h2>Products</h2>
      <table className="bg-neutral-800">
        <thead>
          <tr className="">
            <th>Name</th>
            <th>Price</th>
            <th className="hidden md:flex">Description</th>
            <th>Image</th>
            <th className="hidden md:inline-block">Category</th>
            <th className="hidden md:inline-block">Stock</th>
            <th className="hidden md:inline-block">Featured</th>
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
                <td className="hidden md:flex">{product.description}</td>
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
                <td className="hidden md:inline-block">{product.category}</td>
                <td className="hidden md:inline-block">{product.stock}</td>
                <td className="hidden md:inline-block">
                  {product.featured ? "Yes" : "No"}
                </td>
                <td>
                  <Button primary>Edit</Button>
                  <Button outline>Delete</Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;

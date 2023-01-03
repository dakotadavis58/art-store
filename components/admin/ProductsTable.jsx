import Image from "next/image";
import React from "react";
import Button from "../utils/Button";
import { useRouter } from "next/router";

function ProductsTable({ loading, products }) {
  const router = useRouter();

  return (
    <div>
      <h2>Products</h2>
      {/* table */}
      <div className="table-auto bg-neutral-800">
        {/* table header */}
        <div className="table-header-group">
          <div className="table-row table-head">
            <div className="table-cell ">Name</div>
            <div className="table-cell ">Price</div>
            <div className="hidden md:table-cell">Description</div>
            <div className="table-cell ">Image</div>
            <div className=" md:table-cell">Category</div>
            <div className="hidden  md:table-cell">Stock</div>
            <div className="hidden md:table-cell">Featured</div>
            <div className="table-cell">Actions</div>
          </div>
        </div>
        {/* table body */}
        <div className="table-row-group">
          {loading ? (
            <div className="table-row">
              <div className="table-cell">Loading...</div>
            </div>
          ) : (
            products.map((product) => (
              <div className="table-row" key={product.id}>
                <div className="table-cell">{product.name}</div>
                <div className="table-cell">{product.price}</div>
                <div className="hidden md:table-cell">
                  {product.description}
                </div>
                <div className="table-cell">
                  <div className="max-w-[5rem]">
                    <Image
                      className="imageContain"
                      alt={product.name}
                      src={product.image}
                      fill
                    />
                  </div>
                </div>
                <div className="hidden md:table-cell">{product.category}</div>
                <div className="hidden md:table-cell">{product.stock}</div>
                <div className="hidden md:table-cell">
                  {product.featured ? "Yes" : "No"}
                </div>
                <div className="flex gap-2">
                  <Button
                    primary
                    onClick={() =>
                      router.push(`
                  /admin/${product.slug}
                    
                  `)
                    }
                  >
                    Edit
                  </Button>
                  <Button outline>Delete</Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsTable;

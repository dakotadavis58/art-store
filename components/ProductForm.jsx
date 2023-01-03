import React, { useEffect } from "react";
import Input from "./utils/Input";
import { useForm } from "react-hook-form";
import Button from "./utils/Button";

function ProductForm({ onSubmit, product }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      description: "",
      image: "",
      category: "",
      stock: "",
      featured: false,
    },
  });

  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex p-4 flex-col items-start gap-1  `}
      >
        <label htmlFor="name">Name</label>
        <Input
          {...register("name", {
            required: true,
            maxLength: 80,
            minLength: 3,
            pattern: /^[A-Za-z ]+$/i,
          })}
          placeholder={product ? product.name : "Name"}
          type="text"
          name="name"
          id="name"
        />
        {errors.name && <span className="text-red-600">Required</span>}
        <label htmlFor="slug">Slug</label>
        <Input
          {...register("slug", {
            required: true,
            maxLength: 80,
            minLength: 3,
            pattern: /^[A-Za-z-]+$/i,
          })}
          placeholder={product ? product.slug : "Slug"}
          type="text"
          name="slug"
          id="slug"
        />
        {errors.name && <span className="text-red-600">Required</span>}
        <label htmlFor="price">Price</label>
        <Input
          {...register("price", {
            required: true,
            validate: {
              gtz: (v) => v > 0,
              ltt: (v) => v < 1000,
              // less than 2 decimal spaces
              ltd: (v) => v.toString().split(".")[1]?.length <= 2,
            },
          })}
          type="price"
          placeholder={product ? product.price : "Price"}
          name="price"
          id="price"
        />
        {errors.price && <span className="text-red-600">Required</span>}

        <label htmlFor="description">Description</label>
        <div>
          <textarea
            className="bg-neutral-800 drop-shadow-xl shadow-xl rounded-md mr-1 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary w-full max-w-[345.33px]"
            {...register("description", { required: true, maxLength: 200 })}
            type="text"
            placeholder={product ? product.description : "Description"}
            name="description"
            id="description"
          />
        </div>
        {errors.description && <span className="text-red-600">Required</span>}

        <label htmlFor="category">Category</label>
        <Input
          {...register("category", { required: true, maxLength: 20 })}
          type="text"
          placeholder={product ? product.category : "Category"}
          name="category"
          id="category"
        />
        {errors.category && <span className="text-red-600">Required</span>}

        <label htmlFor="stock">Stock</label>
        <Input
          {...register("stock", { required: true, min: 0, max: 1000 })}
          type="number"
          placeholder={product ? product.stock : "0-1000"}
          name="stock"
          id="stock"
        />
        {errors.stock && <span className="text-red-600">Required</span>}

        <div className="flex gap-2">
          <label htmlFor="featured">Featured</label>
          <Input
            {...register("featured")}
            type="checkbox"
            placeholder={product ? product.featured : "Featured"}
            name="featured"
            id="featured"
          />
        </div>

        <label htmlFor="image">Image</label>
        <input
          {...register("image")}
          type="file"
          placeholder={product ? product.image : "Image"}
          name="image"
          id="image"
        />
        {errors.image && <span className="text-red-600">Required</span>}
        <Button primary type="submit">
          {product ? "Save Product" : "Add Product"}
        </Button>
      </form>
    </div>
  );
}

export default ProductForm;

import React, { useState } from "react";
import Button from "../Button";
import { useForm } from "react-hook-form";
import axios from "axios";

function AddProduct() {
  const [showAdd, setShowAdd] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      description: "",
      image: "",
      category: "",
      stockNum: "",
      featured: false,
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      axios.post("http://localhost:3000/api/products", data).then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-start ">
      <button onClick={() => setShowAdd(!showAdd)}>Add Product</button>
      <div className="bg-neutral-800">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${
            showAdd ? "flex" : "hidden"
          } p-4 flex-col items-start gap-1 text-black `}
        >
          <label htmlFor="name">Name</label>
          <input
            {...register("name", {
              required: true,
              maxLength: 80,
              pattern: /^[A-Za-z]+$/i,
            })}
            placeholder="Name"
            type="text"
            name="name"
            id="name"
          />
          {errors.name && <span className="text-red-600">Required</span>}
          <label htmlFor="price">Price</label>
          <input
            {...register("price", { required: true, min: 0, max: 1000 })}
            type="number"
            name="price"
            id="price"
          />
          {errors.price && <span className="text-red-600">Required</span>}

          <label htmlFor="description">Description</label>
          <input
            {...register("description", { required: true, maxLength: 200 })}
            type="text"
            placeholder="Description"
            name="description"
            id="description"
          />
          {errors.description && <span className="text-red-600">Required</span>}

          <label htmlFor="image">Image</label>
          <input
            {...register("image")}
            type="file"
            placeholder="Image"
            name="image"
            id="image"
          />
          {errors.image && <span className="text-red-600">Required</span>}

          <label htmlFor="category">Category</label>
          <input
            {...register("category", { required: true, maxLength: 20 })}
            type="text"
            placeholder="Category"
            name="category"
            id="category"
          />
          {errors.category && <span className="text-red-600">Required</span>}

          <label htmlFor="stock">Stock</label>
          <input
            {...register("stock", { required: true, min: 0, max: 1000 })}
            type="number"
            placeholder="1-1000"
            name="stock"
            id="stock"
          />
          {errors.stock && <span className="text-red-600">Required</span>}

          <label htmlFor="featured">Featured</label>
          <input
            {...register("featured")}
            type="checkbox"
            placeholder="Featured"
            name="featured"
            id="featured"
          />

          <Button type="submit">Add Product</Button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;

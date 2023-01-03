import React, { useState } from "react";
import Button from "../utils/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import Input from "../utils/Input";
import ProductForm from "../ProductForm";

function AddProduct() {
  const [showAdd, setShowAdd] = useState(false);

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
      <div className="bg-neutral-800">
        <ProductForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default AddProduct;

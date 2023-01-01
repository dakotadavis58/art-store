import { useRouter } from "next/router";
import React, { useEffect } from "react";
import data from "../../data/data";
import Input from "../../components/Input";
import ProductForm from "../../components/ProductForm";
import Image from "next/image";

function ProductEditPage() {
  const [product, setProduct] = React.useState("");
  const [newProduct, setNewProduct] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  const { slug } = router.query;
  const { products } = data;
  const find = products.find((product) => product.slug === slug);

  const changeInput = (e) => {
    setNewProduct({ ...newProduct, name: e.target.value });
    console.log(newProduct.name);
  };

  const handleSubmit = (e) => {
    console.log(e);
  };

  useEffect(() => {
    setProduct(find);
    setNewProduct(find);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [find]);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="w-1/2 mx-auto flex flex-col items-center">
      <button onClick={router.back}>Back</button>
      <h2 className="text-3xl">Edit Product</h2>
      <h3 className="text-2xl">{product?.name}</h3>
      <div className="flex gap-4 justify-center">
        <div className="w-[400px] h-[300px] p-4">
          <Image
            src={product?.image}
            alt={product?.name}
            fill
            className="imageCover"
          />
        </div>
        <ProductForm product={product} onSubmit={(e) => handleSubmit(e)} />
      </div>
    </div>
  );
}

export default ProductEditPage;

import { useRouter } from "next/router";
import React, { useEffect } from "react";
import data from "../../data/data";

function ProductDetailsPage() {
  const [product, setProduct] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  const { slug } = router.query;
  const { products } = data;
  const find = products.find((product) => product.slug === slug);
  console.log(find);

  useEffect(() => {
    setProduct(find);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
    </div>
  );
}

export default ProductDetailsPage;

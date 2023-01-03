import { useRouter } from "next/router";
import React, { useEffect } from "react";
import data from "../../data/data";
import Image from "next/image";
import Button from "../../components/utils/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../data/redux/cartSlice";

function ProductDetailsPage() {
  const [product, setProduct] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  const { products } = data;
  const find = products.find((product) => product.slug === slug);

  useEffect(() => {
    setProduct(find);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [find]);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="flex gap-8">
      <div>
        <Image
          src={product?.image}
          alt={product?.name}
          width={500}
          height={500}
        />
      </div>
      <div>
        <h1>{product?.name}</h1>
        <p>{product?.description}</p>
        <p>{product?.price}</p>

        <Button primary onClick={(e) => dispatch(addToCart(product))}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetailsPage;

import React from "react";
import PageTitle from "../components/utils/PageTitle";
import CheckoutSteps from "../components/CheckoutSteps";
import ShippingForm from "../components/ShippingForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { saveShippingInfo } from "../data/redux/cartSlice";

function Shipping() {
  const router = useRouter();
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    // TODO: save shipping info to localstorage and user redux
    dispatch(saveShippingInfo(data));
    router.push("/payment");
  };
  return (
    <div>
      <PageTitle>Shipping</PageTitle>
      <CheckoutSteps step1 />
      <ShippingForm onSubmit={onSubmit} />
    </div>
  );
}

export default Shipping;

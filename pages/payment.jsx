import React from "react";
import PageTitle from "../components/utils/PageTitle";
import CheckoutSteps from "../components/CheckoutSteps";
import PaymentForm from "../components/PaymentForm";

function Payment() {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <PageTitle>Shipping</PageTitle>
      <CheckoutSteps step2 />
      <PaymentForm onSubmit={onSubmit} />
    </div>
  );
}

export default Payment;

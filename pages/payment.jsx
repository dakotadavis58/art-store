import React from "react";
import PageTitle from "../components/utils/PageTitle";
import CheckoutSteps from "../components/CheckoutSteps";
import PaymentForm from "../components/PaymentForm";
import Button from "../components/utils/Button";

function Payment() {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <PageTitle>Payment</PageTitle>
      <CheckoutSteps step1 step2 step3 />
      <h1>Place Order</h1>
      <div className="flex justify-between">
        <div className="w-1/2">
          <h2>Shipping</h2>
          <p>Address: 123 Street, City, State, Zip</p>
        </div>
        <div className="w-1/2">
          <h2>Payment</h2>
          <p>Method: Paypal</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/2">
          <h2>Order Items</h2>
          <div className="flex justify-between">
            <div className="w-1/2">
              <p>Item 1</p>
            </div>
            <div className="w-1/2">
              <p>$10</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2">
              <p>Item 2</p>
            </div>
            <div className="w-1/2">
              <p>$20</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h2>Order Summary</h2>
          <div className="flex justify-between">
            <div className="w-1/2">
              <p>Items</p>
            </div>
            <div className="w-1/2">
              <p>$30</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2">
              <p>Shipping</p>
            </div>
            <div className="w-1/2">
              <p>$5</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2">
              <p>Tax</p>
            </div>
            <div className="w-1/2">
              <p>$0</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2">
              <p>Total</p>
            </div>
            <div className="w-1/2">
              <p>$35</p>
            </div>
          </div>
        </div>
      </div>

      <PaymentForm onSubmit={onSubmit} />
    </div>
  );
}

export default Payment;

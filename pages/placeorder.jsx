import React from "react";
import Button from "../components/utils/Button";

function PlaceOrder() {
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log("Place Order");
  };

  return (
    <div>
      <h1>Place Order</h1>
      <Button primary onClick={(e) => handlePlaceOrder(e)}>
        Place Order
      </Button>
    </div>
  );
}

export default PlaceOrder;

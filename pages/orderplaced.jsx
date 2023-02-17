import React from "react";
import Button from "../components/utils/Button";

function OrderPlaced() {
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log("Place Order");
  };

  return (
    <div>
      <h1>Order Placed</h1>
      <p>Thank you for your order!</p>
      <p>Order Number: 123456</p>
      <p>Order Date: 12/12/2021</p>
      <p>Order Total: $30</p>
      <p>Shipping Address: 123 Street, City, State, Zip</p>
      <p>Payment Method: Paypal</p>
      <p>Order Items: Item 1, Item 2</p>
      <p>Order Status: Processing</p>

      <Button primary onClick={handlePlaceOrder}>
        Continue Shopping
      </Button>
    </div>
  );
}

export default OrderPlaced;

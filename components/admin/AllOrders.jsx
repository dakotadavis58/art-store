import React from "react";
import Button from "../Button";

function AllOrders() {
  return (
    <div>
      <h1>All Orders</h1>
      <table className="bg-neutral-800">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Order Date</th>
            <th>Order Total</th>
            <th>Order Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>2021-01-01</td>
            <td>$100</td>
            <td>Shipped</td>
            <td>
              <div className="flex gap-2">
                <Button primary className="">
                  View
                </Button>
                <Button style={"bg-green-500"}>Complete</Button>
                <Button style={"bg-red-500"} className="bg-red-500">
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AllOrders;

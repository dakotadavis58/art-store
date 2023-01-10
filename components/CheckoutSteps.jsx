import React from "react";

function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-primary-main rounded-full flex justify-center items-center">
            {/* put something here */}
          </div>
          <p className="text-primary">Sign In</p>
        </div>
        <div className="w-10 h-0.5 bg-primary"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-primary rounded-full flex justify-center items-center">
            {/*put something here*/}
          </div>
          <p className="text-primary">Shipping</p>
        </div>
        <div className="w-10 h-0.5 bg-primary"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-primary rounded-full flex justify-center items-center">
            {/*put something here*/}
          </div>
          <p className="text-primary">Payment</p>
        </div>
        <div className="w-10 h-0.5 bg-primary"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-primary rounded-full flex justify-center items-center">
            {/*put something here*/}
          </div>
          <p className="text-primary">Place Order</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSteps;

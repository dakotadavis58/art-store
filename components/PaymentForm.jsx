import React from "react";
import Input from "./utils/Input";
import { useForm } from "react-hook-form";
import { Router } from "@mui/icons-material";
import Button from "./utils/Button";
import { useRouter } from "next/router";

function PaymentForm({ onSubmit }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: "",
      address2: "",
      city: "",
      postalCode: "",
      country: "",
    },
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    router.push("/orderplaced");
  };
  return (
    <div>
      <p>We use PayPal to process payments.</p>
      <Button secondary onClick={() => alert("paypal payment thing")}>
        Pay with paypal
      </Button>
      <Button primary onClick={(e) => handleFormSubmit(e)}>
        Finish Order
      </Button>
    </div>
  );
}

export default PaymentForm;

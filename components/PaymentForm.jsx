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
  return (
    <div>
      <Button primary onClick={() => router.push("/placeorder")}>
        Continue
      </Button>
    </div>
  );
}

export default PaymentForm;

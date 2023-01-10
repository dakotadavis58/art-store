import React from "react";
import Input from "./utils/Input";
import Button from "./utils/Button";
import { useForm } from "react-hook-form";

function ShippingForm({ onSubmit }) {
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

  // get address for shipping
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex p-4 flex-col items-start gap-1  `}
      >
        <div>
          <label htmlFor="address">Address</label>
          <Input
            {...register("address", {
              required: true,
              maxLength: 100,
              minLength: 3,
              pattern: /^[A-Za-z ]+$/i,
            })}
            placeholder={"Address"}
            type="text"
            name="address"
            id="address"
          />
          {errors.address && <span className="text-red-600">Required</span>}
        </div>
        <div>
          <label htmlFor="address2">Address 2</label>
          <Input
            {...register("address2", {
              maxLength: 100,
              minLength: 3,
              pattern: /^[A-Za-z ]+$/i,
            })}
            placeholder={"Address 2"}
            type="text"
            name="address2"
            id="address2"
          />
          {errors.address2 && <span className="text-red-600">Required</span>}
        </div>

        <div>
          <label htmlFor="city">City</label>
          <Input
            {...register("city", {
              required: true,
              maxLength: 100,
              minLength: 3,
              pattern: /^[A-Za-z ]+$/i,
            })}
            placeholder={"City"}
            type="text"
            name="city"
            id="city"
          />
          {errors.city && <span className="text-red-600">Required</span>}
        </div>

        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <Input
            {...register("postalCode", {
              required: true,
              maxLength: 100,
              minLength: 3,
              pattern: /^[A-Za-z ]+$/i,
            })}
            placeholder={"Postal Code"}
            type="text"
            name="postalCode"
            id="postalCode"
          />
          {errors.postalCode && <span className="text-red-600">Required</span>}
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <Input
            {...register("country", {
              required: true,
              maxLength: 100,
              minLength: 3,
              pattern: /^[A-Za-z ]+$/i,
            })}
            placeholder={"Country"}
            type="text"
            name="country"
            id="country"
          />
          {errors.country && <span className="text-red-600">Required</span>}
        </div>
        <div>
          <Button primary type="submit">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ShippingForm;

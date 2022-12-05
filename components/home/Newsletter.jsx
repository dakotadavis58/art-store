import React from "react";
import Button from "../Button";
import Input from "../Input";

function Newsletter() {
  return (
    <section className="min-h-[20vh] flex flex-col p-8 min-w-full justify-center py-20">
      <h1 className="text-3xl p-4 mx-auto text-center">Join Our Newsletter!</h1>
      <div className="w-full flex justify-center gap-4">
        <Input
          type="email"
          placeHolder="Email"
          className="w-full h-10 rounded-md px-4 max-w-2xl"
        />
        <Button text={"Send"} rounded className=""></Button>
      </div>
    </section>
  );
}

export default Newsletter;

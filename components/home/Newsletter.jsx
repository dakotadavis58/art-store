import React from "react";
import Button from "../Button";
import Input from "../Input";

function Newsletter() {
  return (
    <section className="min-h-[20vh] flex flex-col min-w-full w-screen justify-center items-center py-20">
      <div className="w-3/4 md:w-1/2 bg-primary rounded-md bg-opacity-75 h-[16rem] coolShadow flex flex-col justify-center items-center">
        <h1 className="text-3xl p-4 mx-auto text-center drop-shadow-2xl">
          Join Our Newsletter!
        </h1>
        <div className="w-3/4 flex flex-col md:flex-row justify-center gap-4">
          <Input
            type="email"
            placeHolder="Email"
            className="w-full h-10 rounded-md px-4 max-w-2xl"
          />
          <Button text={"Send"} rounded primary className=""></Button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

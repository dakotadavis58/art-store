import React from "react";
import Button from "../utils/Button";
import Input from "../utils/Input";

function Newsletter() {
  return (
    <div className="min-h-[20vh] flex flex-col min-w-full w-screen justify-center items-center newsLetter py-10">
      <div className="min-w-[20rem] py-2 bg-primary-main rounded-md  min-h-[8rem] coolShadow flex flex-col justify-center items-center">
        <h1 className="text-3xl p-4 mx-auto text-center drop-shadow-2xl">
          Join Our Newsletter!
        </h1>
        <div className="w-3/4 flex flex-col md:flex-row justify-center gap-4">
          <Input
            type="email"
            placeholder="Email"
            className="w-full h-10 rounded-md px-4 max-w-2xl"
          />
          <Button text={"Send"} rounded primary className=""></Button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

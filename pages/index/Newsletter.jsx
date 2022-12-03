import React from "react";
import Button from "../../components/Button";

function Newsletter() {
  return (
    <section className="min-h-[20vh] p-8 min-w-full">
      <h1 className="text-3xl p-4 mx-auto text-center">Join Our Newsletter!</h1>
      <div className="w-full flex">
        <input
          placeholder="Email"
          type="email"
          className="w-full h-10  rounded-l-md px-4"
        />
        <Button text={"Send"} style="rounded-r-md" className=""></Button>
      </div>
    </section>
  );
}

export default Newsletter;

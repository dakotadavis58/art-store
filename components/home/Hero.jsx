import React from "react";
import Button from "../../components/Button";

function Hero({ hero }) {
  const { title, subtitle, btnText } = hero;
  return (
    <section className="hero h-[50vh] w-screen">
      <div className="heroImg flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl md:text-7xl">{title}</h1>
        <h2 className="md:text-2xl">{subtitle}</h2>
        <Button primary rounded text={btnText} />
      </div>
    </section>
  );
}

export default Hero;

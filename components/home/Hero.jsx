import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/Button";

function Hero({ hero }) {
  const { title, subtitle, btnText } = hero;
  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
    console.log("clicked");
  };

  return (
    <section className="hero h-[50vh] w-screen">
      <div className="heroImg flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl md:text-7xl">{title}</h1>
        <h2 className="md:text-2xl">{subtitle}</h2>
        <Button primary rounded text={btnText} onClick={handleClick} />
      </div>
    </section>
  );
}

export default Hero;

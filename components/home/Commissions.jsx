import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import spaceFox from "../../public/assets/commissions-img.jpeg";
import Button from "../utils/Button";

function Commissions() {
  const router = useRouter();
  const handleClick = () => {
    console.log("clicked");
    router.push("/contact");
  };
  return (
    <div className="flex flex-col md:flex-row items-center w-full h-full min-h-[30vh]">
      <div className="left flex-1 px-2">
        <h1 className="text-3xl md:text-6xl">Now Accepting Commissions!</h1>
        <p className="py-4 text-base md:text-lg text-neutral-300">
          Have an idea for a custom piece? We&apos;re now accepting commissions
          for custom projects. Please contact us for more information!
        </p>
        <Button
          text={"Contact Us"}
          onClick={handleClick}
          rounded
          secondary
          className=""
        ></Button>
      </div>
      <div className="right rounded-md flex-1 flex justify-center items-center h-full">
        <div className="image-container rounded-md min-h-[20rem] max-h-[40rem]">
          <Image
            alt="Space fox"
            src={spaceFox}
            className="imageCover max-h-[30rem] rounded-md"
            fill
          />
        </div>
      </div>
    </div>
  );
}

export default Commissions;

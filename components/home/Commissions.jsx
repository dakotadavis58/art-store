import Image from "next/image";
import React from "react";
import spaceFox from "../../public/assets/commissions-img.jpeg";

function Commissions() {
  return (
    <section className="flex flex-col md:flex-row items-center w-full h-full min-h-[30vh] py-20">
      <div className="left flex-1 p-4">
        <h1 className="text-6xl py-2">Now Accepting Commissions!</h1>
        <p className="py-10 text-lg text-neutral-300">
          Have an idea for a custom piece? We&apos;re now accepting commissions
          for custom projects. Please contact us for more information!
        </p>
      </div>
      <div className="right flex-1 p-4 flex justify-center items-center h-full">
        <div className="image-container min-h-[20rem] max-h-[40rem]">
          <Image
            alt="Space fox"
            src={spaceFox}
            className="image max-h-[30rem]"
            fill
          />
        </div>
      </div>
    </section>
  );
}

export default Commissions;

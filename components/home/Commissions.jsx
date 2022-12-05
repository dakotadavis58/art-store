import Image from "next/image";
import React from "react";
import spaceFox from "../../public/assets/commissions-img.jpeg";

function Commissions() {
  return (
    <section className="flex flex-col md:flex-row items-center w-full h-full min-h-[30vh] py-20">
      <div className="left flex-1 p-4">
        <h1 className="text-4xl py-2">Now Taking Commissions!</h1>
        <p className="py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          est a vitae itaque! Vitae sit sunt vero, ex odio debitis repellat.
          Impedit placeat expedita minus fuga earum maxime itaque enim.
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

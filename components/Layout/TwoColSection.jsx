import Image from "next/image";
import React from "react";
import spaceFox from "../../public/assets/commissions-img.jpeg";

function TwoColSection({ reverse }) {
  return (
    <div
      className={`w-full h-full flex flex-col sm:flex-row gap-2 sm:gap-4 px-8 sm:px-28 justify-center ${
        reverse && "sm:flex-row-reverse"
      }`}
    >
      <div id="left" className="flex-1">
        <div className="image-container rounded-md max-h-[30rem] max-w-3xl md:p-0 text-center">
          <Image
            alt="Space fox"
            src={spaceFox}
            className="imageCover rounded-md aspect-4/3"
            fill
          />
        </div>
      </div>
      <div id="right" className="flex-1">
        <h2 className="text-2xl">Persons name</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit dicta
          non modi provident maiores debitis consequuntur, reiciendis,
          consectetur asperiores voluptatibus ducimus iste recusandae quis animi
          nemo vitae numquam esse quisquam!{" "}
        </p>
      </div>
    </div>
  );
}

export default TwoColSection;

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo({ logo }) {
  const { text, img, alt } = logo;
  return (
    <Link href="/">
      <div className="flex justify-center items-center gap-4">
        <div className="image-container max-w-[3rem] min-w-[3rem]">
          <Image src={img} alt={alt} fill className="imageContain" />
        </div>
        <h1 className="text-white text-2xl">{text}</h1>
      </div>
    </Link>
  );
}

export default Logo;

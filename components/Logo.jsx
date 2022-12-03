import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo({ logo, img }) {
  const { text } = logo;
  return (
    <Link href="/">
      <div className="flex justify-center items-center gap-4">
        <Image src={img} alt={logo.alt} height={50} />
        <h1 className="text-white text-2xl">{text}</h1>
      </div>
    </Link>
  );
}

export default Logo;

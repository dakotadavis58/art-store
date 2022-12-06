import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Socials() {
  return (
    <div className="flex gap-4 md:gap-8">
      <Link href="https://www.facebook.com/" className="transition-all">
        <FaFacebookSquare className="text-3xl text-white hover:text-primary-main transition-all " />
      </Link>
      <Link href="https://www.instagram.com/" className="transition-all">
        <FaInstagramSquare className="text-3xl text-white hover:text-primary-main transition-all" />
      </Link>
      <Link href="https://www.twitter.com/" className="transition-all">
        <FaTwitterSquare className="text-3xl text-white hover:text-primary-main transition-all " />
      </Link>
    </div>
  );
}

export default Socials;

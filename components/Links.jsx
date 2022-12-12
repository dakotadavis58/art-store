import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Links({ links, col, mobile, className, handleClick }) {
  const router = useRouter();
  return (
    <ul
      className={`gap-4 w-full h-full max-w-md justify-between lg:flex m-2 ${
        className ? className : ""
      } ${mobile ? "flex" : "hidden"} ${col ? "flex-col" : ""}`}
    >
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              href={link.url}
              onClick={handleClick}
              className={`link ${
                router.pathname === link.url ? "activeLink" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Links({ links, col }) {
  const router = useRouter();
  return (
    <ul
      className={`gap-4 w-full max-w-md justify-between hidden md:flex m-2 ${
        col ? "flex-col" : ""
      }`}
    >
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              href={link.url}
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

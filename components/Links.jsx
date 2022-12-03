import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Links({ links }) {
  const router = useRouter();
  return (
    <ul className="gap-14 hidden md:flex">
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

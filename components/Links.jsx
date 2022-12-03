import React from "react";
import Link from "next/link";

function Links({ links }) {
  return (
    <ul className="gap-14 hidden md:flex">
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link href={link.url}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;

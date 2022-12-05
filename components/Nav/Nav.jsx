import React from "react";
import Links from "../Links";
import Logo from "../Logo";
import data from "../../data/data.js";
import { BsPerson, BsCart2 } from "react-icons/bs";
import Search from "./Search";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav() {
  const { navLinks, logo, btnText } = data.nav;
  const router = useRouter();
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-neutral-900">
      <Logo logo={logo} />
      <Search />
      <Links links={navLinks} />
      <div className="flex gap-4">
        <Link
          href={"/profile"}
          className={`link ${
            router.pathname === "/profile" ? "activeLink" : ""
          }`}
        >
          <div className="m-1">
            <BsPerson className="text-3xl" />
          </div>
        </Link>
        <Link
          href={"/cart"}
          className={`link ${router.pathname === "/cart" ? "activeLink" : ""}`}
        >
          <div className="m-1">
            <BsCart2 className="text-3xl" />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;

import React from "react";
import Links from "../Links";
import Logo from "../Logo";
import data from "../../data/data.js";
import { BsPerson, BsCart2 } from "react-icons/bs";
import Search from "./Search";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

function Nav({ handleOpen, open }) {
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
      <div className="flex gap-4 m-2">
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
        <div className="relative">
          <button className="md:hidden link" onClick={handleOpen}>
            <BiMenu className="text-4xl" />
          </button>
          <div
            className={`absolute right-0 z-[1000] mt-2 w-56 origin-top-right rounded-md bg-black drop-shadow-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ${
              open ? "right-0" : "hidden"
            }`}
          >
            <div className="relative m-4 top-0 z-[1000]">
              {/* <button onClick={handleOpen}>
                <IoMdClose className="link text-4xl text-white" />
              </button> */}
            </div>
            <Search />
            <Links className={"justify-evenly"} col mobile links={navLinks} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

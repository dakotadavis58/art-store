import React, { useEffect, useRef, useState } from "react";
import Links from "../Links";
import Logo from "../Logo";
import data from "../../data/data.js";
import { BsPerson, BsCart2 } from "react-icons/bs";
import Search from "./Search";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiMenu } from "react-icons/bi";

function Nav({ handleOpen }) {
  const { navLinks, logo, btnText } = data.nav;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (menuRef?.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    });

    return () => {
      document.removeEventListener("mousedown", (e) => {
        if (menuRef?.current && !menuRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      });
    };
  });

  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  return (
    <nav className="flex justify-between items-center p-4 bg-neutral-900">
      <Logo logo={logo} />
      <Search className={"hidden md:flex"} placeholder={"Search stuff..."} />
      <Links links={navLinks} handleClick={handleClick} />
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
        <div className="relative" ref={menuRef}>
          <button className="md:hidden link" onClick={(e) => handleClick(e)}>
            <BiMenu className="text-4xl" />
          </button>
          <div
            className={`absolute md:hidden flex flex-col py-4 gap-2 right-0 z-[1000] mt-2 w-56 origin-top-right rounded-md bg-neutral-900 drop-shadow-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ${
              isOpen ? "" : "hidden"
            }`}
          >
            <Search placeholder={"Search stuff..."} className={"flex"} />
            <Links className={"justify-evenly"} col mobile links={navLinks} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

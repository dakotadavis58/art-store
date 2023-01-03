import React from "react";
import Logo from "./Logo";
import data from "../data/data.js";
import Links from "./Links";
import Socials from "./Socials";

function Footer() {
  const { nav, footer } = data;
  const { navLinks, logo, btnText } = nav;

  return (
    <div className="flex justify-evenly items-center p-4 bg-neutral-900 min-h-[10vh] gap-4">
      <Logo logo={logo} />
      <div className="">
        <Links links={navLinks} />
      </div>
      <Socials />
    </div>
  );
}

export default Footer;

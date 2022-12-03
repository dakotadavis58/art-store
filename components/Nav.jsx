import React from "react";
import Button from "./Button";
import Links from "./Links";
import Logo from "./Logo";
import data from "../data/data.js";
import img from "../public/assets/logo.png";

function Nav() {
  const { navLinks, logo, btnText } = data.nav;
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <nav className="nav">
      <Logo logo={logo} img={img} />
      <Links links={navLinks} />
      <Button onClick={handleClick} primary text={btnText} />
    </nav>
  );
}

export default Nav;

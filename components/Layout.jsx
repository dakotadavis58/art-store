import React, { useEffect } from "react";
import Footer from "./Footer";
import Nav from "../components/Nav/Nav";

function Layout({ children }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState(true);
  const openMenu = () => {
    setOpen(!open);
    if (scroll) {
      document.body.classList.add("fixed");
      setScroll(false);
    } else {
      document.body.classList.remove("fixed");
      setScroll(true);
    }
  };

  return (
    <>
      <Nav open={open} handleOpen={openMenu} />
      <main
        className={`w-screen min-h-screen flex justify-center${
          open ? "overflow-hidden" : ""
        }`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;

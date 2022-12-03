import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="main w-screen">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

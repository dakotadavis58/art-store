import React, { useEffect } from "react";
import Footer from "./Footer";
import Nav from "../components/Nav/Nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={`w-screen min-h-[80vh] flex justify-center`}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;

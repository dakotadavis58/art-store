import Head from "next/head";
import React, { useContext } from "react";
import { useSiteData } from "../hooks/SiteContext.js";
import SectionContainer from "../components/Layout/SectionContainer";
import TwoColSection from "../components/Layout/TwoColSection";

function Contact() {
  const data = useSiteData();
  const { contact } = data.seo;
  const { title, description, keywords } = contact;
  return (
    <div className="flex flex-col items-center gap-2 px-10">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <h1 className="text-4xl">About Us</h1>
      <SectionContainer>
        <div className=" w-screen min-h-[300px] ">
          <TwoColSection />
        </div>
      </SectionContainer>
    </div>
  );
}

export default Contact;

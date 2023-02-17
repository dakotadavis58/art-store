import Head from "next/head";
import React from "react";
import TwoColSection from "../components/Layout/TwoColSection";
import { useSiteData } from "../hooks/SiteContext.jsx";
import SectionContainer from "../components/Layout/SectionContainer";

function About() {
  const data = useSiteData();
  const { about } = data.seo;
  const { title, description, keywords } = about;
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
      <SectionContainer>
        <div className=" w-screen min-h-[300px] ">
          <TwoColSection reverse />
        </div>
      </SectionContainer>
    </div>
  );
}

export default About;

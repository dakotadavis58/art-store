import Head from "next/head";
import React from "react";
import { useSiteData } from "../hooks/siteContext";

function About() {
  const data = useSiteData();
  const { about } = data.seo;
  const { title, description, keywords } = about;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
    </div>
  );
}

export default About;

import Head from "next/head";
import React from "react";
import { useSiteData } from "../hooks/siteContext";

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
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis soluta
        earum, quidem officiis reiciendis natus id dolorem eius totam recusandae
        dolor odio perferendis esse itaque! Distinctio, nobis quae. Natus,
        fugit.
      </p>
    </div>
  );
}

export default About;

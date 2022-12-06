import Head from "next/head";
import React, { useContext } from "react";
import { SiteContext, useSiteData } from "../hooks/siteContext";

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
      <h1 className="text-4xl">Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iure
        voluptate. Voluptatibus, deserunt? Tempora fugit reprehenderit modi
        consequuntur, quis, sit architecto iusto sequi, corrupti odit enim non
        iure repellat quidem!
      </p>
    </div>
  );
}

export default Contact;

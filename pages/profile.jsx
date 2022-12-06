import Head from "next/head";
import React from "react";
import { useSiteData } from "../hooks/siteContext";

function Profile() {
  const data = useSiteData();
  const { profile } = data.seo;
  const { title, description, keywords } = profile;
  return (
    <div className="flex flex-col items-center gap-2 px-10">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <h1 className="text-4xl">Profile</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus id
        facere nulla quaerat ipsam voluptas esse architecto at aliquam dolorem
        iusto reprehenderit repellat praesentium, velit facilis modi saepe quo
        corrupti?
      </p>
    </div>
  );
}

export default Profile;

import Head from "next/head";
import React from "react";
import { useSiteData } from "../hooks/siteContext";

function Profile() {
  const data = useSiteData();
  const { profile } = data.seo;
  const { title, description, keywords } = profile;
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

export default Profile;

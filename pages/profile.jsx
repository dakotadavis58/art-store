import Head from "next/head";
import React from "react";
import { useSiteData } from "../hooks/siteContext";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function Profile() {
  const data = useSiteData();
  const { data: session } = useSession();
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
      {session ? (
        <>
          <div className="flex gap-2">
            <div>
              <Image
                src={session.user.image}
                alt={session.user.name}
                fill
                className="imageCover"
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <div>{session.user.name}</div>
              <div>{session.user.email}</div>
            </div>
          </div>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
}

export default Profile;

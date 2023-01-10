import { getProviders, getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Signin() {
  const [providers, setProviders] = React.useState("");
  const { data } = useSession();
  const router = useRouter();
  const redirectURL = router.query.redirect
    ? `/${router.query.redirect}`
    : null;
  console.log(router.query.redirect);

  useEffect(() => {
    data?.user && router.push("/profile");
  }, [data, router]);

  useEffect(() => {
    const getProviderData = async () => {
      const providers = await getProviders();
      setProviders(providers);
    };
    getProviderData();
  }, []);

  return (
    <div>
      <h1>Sign in</h1>
      {data ? (
        <>Redirecting to profile page...</>
      ) : (
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: redirectURL == null ? "/profile" : redirectURL,
                })
              }
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))
      )}
      {}
    </div>
  );
}

export default Signin;

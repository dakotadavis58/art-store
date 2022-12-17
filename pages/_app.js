import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import Layout from "../components/Layout";
import { SiteContext, SiteProvider } from "../hooks/siteContext";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div className={poppins.className}>
      <SessionProvider session={session}>
        <SiteProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SiteProvider>
      </SessionProvider>
    </div>
  );
}

export default MyApp;

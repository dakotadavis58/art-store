import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import Layout from "../components/Layout";
import { SiteContext, SiteProvider } from "../hooks/siteContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <SiteProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SiteProvider>
    </div>
  );
}

export default MyApp;

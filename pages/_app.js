import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import Layout from "../components/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;

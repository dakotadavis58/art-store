import Head from "next/head";
import Hero from "../components/home/Hero";
import NewArrivals from "../components/home/NewArrivals";
import Commissions from "../components/home/Commissions";
import Newsletter from "../components/home/Newsletter";
import About from "../components/home/About";
import { useSiteData } from "../hooks/SiteContext";
import SectionContainer from "../components/Layout/SectionContainer";

export default function Home() {
  const data = useSiteData();
  const { hero, commissions, newArrivals, newsletter, products, seo } = data;
  const { title, description, keywords } = seo.home;
  return (
    <div className="w-full h-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <Hero hero={hero} />
      <div className="flex flex-col items-center px-4 md:px-28">
        <SectionContainer>
          <NewArrivals newArrivals={newArrivals} products={products} />
        </SectionContainer>
        <SectionContainer>
          <About />
        </SectionContainer>
        <SectionContainer>
          <Commissions commissions={commissions} />
        </SectionContainer>
        <SectionContainer>
          <Newsletter newsletter={newsletter} />
        </SectionContainer>
      </div>
    </div>
  );
}

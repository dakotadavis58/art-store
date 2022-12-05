import Head from "next/head";
import Hero from "../components/home/Hero";
import NewArrivals from "../components/home/NewArrivals";
import Commissions from "../components/home/Commissions";
import Newsletter from "../components/home/Newsletter";
import data from "../data/data";
import About from "../components/home/About";
import SectionContainer from "../components/SectionContainer";

export default function Home() {
  const { hero, commissions, newArrivals, newsletter, products } = data;
  return (
    <div className="w-full h-full">
      <Head>
        <title>Queeriosities</title>
        <meta name="description" content="Art and homemode products" />
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

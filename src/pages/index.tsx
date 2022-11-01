import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { SPACE } from "../assets/images";
import { AboutUs, DailyRoutine, Footer, Header, Hero } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <AboutUs />
      <DailyRoutine />
      <Footer />
    </div>
  );
};

export default Home;

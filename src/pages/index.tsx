import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { SPACE } from "../assets/images";
import { AboutUs, Footer, Header, Hero } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          backgroundImage: `url(${SPACE.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <Hero />
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;

import { Grid } from "@mui/material";
import React from "react";
import { ASTRONAUT } from "../assets/animations";
import Lottie from "react-lottie";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ASTRONAUT,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="h-[28rem] w-full main-container">
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <div className="mt-12">
            <p className="text-5xl font-bold text-yellow-400">Hello!👋</p>
            <p className="text-4xl text-white font-bold mt-8">
              I'm Srinu Reddy
            </p>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <div className="w-full h-[27rem] flex justify-end items-center">
            <div className="">
              <Lottie options={defaultOptions} height={500} width={450} />
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;

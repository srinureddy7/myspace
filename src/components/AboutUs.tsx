import { Grid } from "@mui/material";
import React from "react";
import { CODER } from "../assets/animations";
import Lottie from "react-lottie";

const AboutUs = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CODER,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="h-[28rem] w-full main-container my-16">
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <div className="w-full h-[27rem] flex justify-start items-center">
            <div className="">
              <Lottie options={defaultOptions} height={500} width={450} />
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <div className="mt-12">
            <p className="text-lg font-semibold">WHO AM I?</p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutUs;

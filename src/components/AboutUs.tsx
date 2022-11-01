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
    <section className=" w-full main-container my-16">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="w-full flex md:justify-start justify-center items-center">
            <div className="hidden md:block">
              <Lottie options={defaultOptions} height={450} width={450} />
            </div>
            <div className="block md:hidden">
              <Lottie options={defaultOptions} height={300} width={300} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="mt-12">
            <p className="text-3xl font-semibold text-orange-400">WHO AM I?</p>
            <div>
              <ul className="text-lg list-disc space-y-5 mt-6">
                <li>
                  I fell in love with programming and I have at least learnt
                  something, I think…
                </li>
                <li>
                  I am fluent in classics like{" "}
                  <span className="text-blue-500 font-semibold">
                    C++, Javascript
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-500 font-semibold">Python</span> .
                </li>
                <li>
                  My field of Interest's are building new{" "}
                  <span className="text-blue-500 font-semibold">
                    {" "}
                    Web Technologies{" "}
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-500 font-semibold">
                    Products
                  </span>{" "}
                  and also in areas related to{" "}
                  <span className="text-blue-500 font-semibold">
                    {" "}
                    Deep Learning{" "}
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-500 font-semibold">
                    {" "}
                    Natural Launguage{" "}
                  </span>{" "}
                  Processing.
                </li>
                <li>
                  Whenever possible, I also apply my passion for developing
                  products with Node.js and Modern Javascript Library and
                  Frameworks like React.js and Next.js
                </li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutUs;

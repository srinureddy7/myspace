import { Grid } from "@mui/material";
import React from "react";
import { ASTRONAUT } from "../assets/animations";
import Lottie from "react-lottie";
import { Telegram } from "@mui/icons-material";
import { Typewriter } from "react-simple-typewriter";
import { MYIMAGE } from "../assets/images";

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
    <section className="h-[85vh] w-full main-container">
      <div className="w-full h-full flex">
        <div className="w-1/2 h-full flex items-center">
          <div>
            <p className="text-4xl font-bold text-theme">Srinu Reddy🖐️</p>

            <div className="text-theme mt-8 flex text-xl font-semibold">
              <p className="pr-2 text-gray-500">I am</p>
              <Typewriter
                words={["Developer", "Coder", "Designer", "Engineer"]}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>

            <p className="mt-8 text-gray-500 max-w-[75%]">
              Self-driven, quick starter, passionate about working on open
              source products & building thriving communities around them and
              challenging real-world problems.
            </p>
            <button className="px-8 py-3 bg-theme !text-white rounded-xl mt-8 flex items-center gap-2 hover:scale-110 hover:-translate-y-2 transition-all ease-in-out duration-100 hover:text-theme">
              Say Hello <Telegram />
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="hero_image"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

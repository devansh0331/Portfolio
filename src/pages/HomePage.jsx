import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { TrendingCoins } from "../config/api";
import { Carousel } from "@material-tailwind/react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import Carousal from "../components/Carousal";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "../components/SocialLinks";

function HomePage() {
  const sequence = [
    "Full Stack Web Developer",
    1000,
    "Blockchain Explorer",
    1000,
    "Engineering Student",
    1000,
  ];

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-evenly text-darkText">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-evenly md:justify-between">
        <SocialLinks />
        <div className="w-full h-full flex flex-col items-center justify-evenly text-center">
          <div className="flex-1 md:flex-none">
            <p className="">
              <span className="bg-darkBg p-3 text-xl rounded-md">
                👋 Hi Everyone!
              </span>
            </p>
            <p className="p-3 text-xl md:text-3xl rounded-md">
              I am &nbsp;
              <span className="text-3xl md:text-5xl text-darkYellow font-semibold">
                Devansh Shrivastava
              </span>{" "}
            </p>
            <p className="p-3 h-full text-xl md:text-3xl rounded-md">
              a{" "}
              <span className="text-5xl md:text-7xl text-darkBlue font-semibold">
                <TypeAnimation
                  sequence={sequence}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>
          </div>
          <div className="w-full flex-1 md:flex-none md:w-5/6">
            <Carousal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

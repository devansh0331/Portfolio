import React, { useEffect, useState } from "react";
import about from "../assets/about3.jpeg";
import { Button } from "@material-tailwind/react";
import { FaArrowCircleDown, FaArrowCircleRight, FaEdit } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import ReactTimeAgo from "react-time-ago";

// SKILLS IMPORT
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import nodejs from "../assets/logos/nodejs.png";
import expressjs from "../assets/logos/expressjs.png";
import mongodb from "../assets/logos/mongodb.png";
import reactjs from "../assets/logos/reactjs.png";
import vite from "../assets/logos/vite.svg";
import tailwind from "../assets/logos/tailwind.png";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import javascript from "../assets/logos/js.png";
import solidity from "../assets/logos/solidity.png";

// LANGUAGE IMPORT
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import python from "../assets/logos/python.png";
import java from "../assets/logos/java.png";

// BLOCKCHAIN IMPORT
import { SiSolidity } from "react-icons/si";
import { GithubAPI } from "../config/api";

function AboutPage() {
  const [latestCommit, setLatestCommit] = useState(new Date());
  const skills = [
    {
      skill: <FaNodeJs />,
      docs: "https://nodejs.org/en",
    },
    { skill: <SiExpress />, docs: "https://expressjs.com/" },
    { skill: <SiMongodb />, docs: "https://www.mongodb.com/" },
    { skill: <FaReact />, docs: "https://react.dev/" },
    { skill: <SiVite />, docs: "https://vitejs.dev/" },
    { skill: <SiTailwindcss />, docs: "https://tailwindcss.com/" },
    { skill: <FaHtml5 />, docs: "https://en.wikipedia.org/wiki/HTML5" },
    { skill: <FaCss3 />, docs: "https://en.wikipedia.org/wiki/CSS" },
    { skill: <SiJavascript />, docs: "https://www.javascript.com/" },
  ];
  const skills1 = [
    {
      skill: nodejs,
      docs: "https://nodejs.org/en",
    },
    { skill: expressjs, docs: "https://expressjs.com/" },
    { skill: mongodb, docs: "https://www.mongodb.com/" },
    { skill: reactjs, docs: "https://react.dev/" },
    { skill: vite, docs: "https://vitejs.dev/" },
    { skill: tailwind, docs: "https://tailwindcss.com/" },
    { skill: html, docs: "https://en.wikipedia.org/wiki/HTML5" },
    { skill: css, docs: "https://en.wikipedia.org/wiki/CSS" },
    { skill: javascript, docs: "https://www.javascript.com/" },
    { skill: solidity, docs: "https://soliditylang.org/" },
  ];

  const blockchain = [{ skill: <SiSolidity /> }];

  const languages = [{ language: <FaJava /> }, { language: <FaPython /> }];
  const languages1 = [
    { language: java, docs: "https://www.java.com/en/" },
    { language: python, docs: "https://www.python.org/" },
  ];

  useEffect(() => {
    getLatestCommited();
  }, []);

  const getLatestCommited = async () => {
    try {
      const data = await fetch(GithubAPI(), { methog: "Get" });
      const res = await data.json();

      if (res) {
        setLatestCommit(res.commit.commit.author.date);
        console.log(res.commit.commit.author.date);
        console.log(latestCommit);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative w-full h-full bg-darkBg flex flex-col md:flex-row items justify-between">
      <p className="absolute top-3 left-3 font-bold flex items-center text-darkGray">
        <FaEdit /> &nbsp;
        <ReactTimeAgo date={latestCommit} locale="en-US" />
      </p>
      <div className=" h-full w-full flex flex-col items-center justify-center">
        <div className="w-11/12 mt-5 md:mt-0 md:w-3/4 mx-auto shadow-white shadow-sm rounded-sm p-5">
          <p className="text-5xl font-semibold text-darkYellow">About</p>
          <hr className="my-3" />
          <p className="text-justify">
            Hi! I'm a passionate full stack web developer, a budding blockchain
            developer, and a dedicated B.Tech student. With a high interest in
            building dynamic and responsive web applications, I'm proficient in
            both front-end and back-end technologies. Fascinated by the
            potential of decentralized technologies, I have a solid
            understanding of blockchain fundamentals and hands-on experience in
            smart contracts. Eager to learn and grow, I'm constantly exploring
            new areas in tech and ready to take on exciting opportunities. Let's
            create something amazing together!
          </p>
          <br />
          <div className="w-full flex flex-col md:flex-row items-start justify-between">
            <div className="w-fit font-bold text-xl  flex items-center text-darkGray hover:text-white">
              <p className="cursor-pointer ">Resume &nbsp;</p>

              <FaArrowCircleDown className="" />
            </div>
            <div className="font-bold text-md cursor-pointer text-darkGray hover:text-white">
              {/* <p>
                edited: <ReactTimeAgo date={latestCommit} locale="en-US" />
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full mt-5 md:mt-0 md:w-1/4 flex flex-col items-center justify-between shadow-white shadow-sm rounded-sm">
        <div className="w-full">
          <a target="_blank" href="">
            <img src={about} alt="" className=" w-full blur-0   bg-darkBlack" />
          </a>
          <div className=" font-bold flex items-center justify-center p-3 cursor-pointer text-darkGray hover:text-white">
            Available for Freelance &nbsp;
            <FaEnvelopeSquare />
          </div>
        </div>
        <hr />
        <div className="hidden  w-full h-full p-4 md:grid grid-cols-1 gap-0 ">
          <div>
            <p className=" font-semibold mb-2 text-darkYellow">.Development</p>
            <div className="w-full  grid grid-cols-5 gap-6">
              {/* {skills.map((item, key) => (
                <p key={key} className=" text-3xl">
                  {item.skill}
                </p>
              ))} */}
              {skills1.map((item, key) => (
                <a key={key} target="_blank" href={item.docs}>
                  <img src={item.skill} className="w-20" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold mb-2 text-darkYellow">
              .Coding Languages
            </p>
            <div className="w-full mt-3 grid grid-cols-5 gap-6">
              {/* {languages.map((item, key) => (
                <p key={key} className="text-3xl">
                  {item.language}
                </p>
              ))} */}
              {languages1.map((item, key) => (
                <a key={key} target="_blank" href={item.docs}>
                  <img src={item.language} className="w-20" />
                </a>
              ))}
            </div>
          </div>
          {/* <div>
            <p className="font-semibold mb-2 text-darkYellow">
              .Blockchain Developement
            </p>
            <div className="w-full mt-3 grid grid-cols-5 gap-3">
              {blockchain.map((item, key) => (
                <p key={key} className="text-3xl">
                  {item.skill}
                </p>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

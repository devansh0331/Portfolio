import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function SocialLinks() {
  return (
    <div className="w-full md:w-auto h-1/3 grid grid-cols-5 items-center md:grid-cols-1 text-3xl text-darkGray px-5">
      <a href="" className="hover:text-white">
        <FaLinkedin />
      </a>
      <a href="" className="hover:text-white">
        <FaSquareXTwitter />
      </a>
      <a href="" className="hover:text-white">
        <FaInstagramSquare />
      </a>
      <a href="" className="hover:text-white">
        <FaGithub />
      </a>
      <a href="" className="hover:text-white">
        <FaDiscord />
      </a>
    </div>
  );
}

export default SocialLinks;

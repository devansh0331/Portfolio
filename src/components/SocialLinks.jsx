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
      <a
        target="_blank"
        href="https://www.linkedin.com/in/devansh-shrivastava-94228a230/"
        className="hover:text-white"
      >
        <FaLinkedin />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/SomewhatDevansh"
        className="hover:text-white"
      >
        <FaSquareXTwitter />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/devansh19_official/"
        className="hover:text-white"
      >
        <FaInstagramSquare />
      </a>
      <a
        target="_blank"
        href="https://github.com/devansh0331"
        className="hover:text-white"
      >
        <FaGithub />
      </a>
      <a
        target="_blank"
        href="https://discord.com/channels/1160091084509159475/1160091085213798412"
        className="hover:text-white"
      >
        <FaDiscord />
      </a>
    </div>
  );
}

export default SocialLinks;

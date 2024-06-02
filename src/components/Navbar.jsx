import React from "react";
import { CryptoState } from "../Context";

function Navbar() {
  const { currency, setCurrency, alterSymbol, symbol } = CryptoState();
  // const currency = "inr";

  const changeCurrency = (e) => {
    e.preventDefault();
    if (currency == "inr") {
      setCurrency("usd");
    } else {
      setCurrency("inr");
    }
  };

  return (
    <div className="w-screen fixed top-0 z-10">
      <div className="">
        <nav className=" w-full flex items-center justify-between p-5 ">
          {/* <ul className="f">
            <a href="">
              <li>About</li>
            </a>
            <a href="">
              <li>Skills</li>
            </a>
            <a href="">
              <li>Projects</li>
            </a>
            <a href="">
              <li>Experience</li>
            </a>
          </ul> */}
          <p></p>
          <button
            onClick={changeCurrency}
            className="bg-darkBg text-darkGray  border border-1 border-darkGray text-xs p-3 rounded-md cursor-pointer hover:text-white hover:border-white"
          >
            Check Prices for: &nbsp;
            <span className="text-darkYellow text-base leading-3">
              {alterSymbol}
            </span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

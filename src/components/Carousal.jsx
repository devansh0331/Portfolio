import React, { useEffect, useState } from "react";
import { TrendingCoins } from "../config/api";
import AliceCarousel, { Link } from "react-alice-carousel";
import { numberWithCommas } from "../config/function";
import { CryptoState } from "../Context";

function Carousal() {
  const [data, setData] = useState([]);
  const { currency, symbol } = CryptoState();

  //   const currency = "usd";
  //   const symbol = "$";

  const getTrendingCoins = async () => {
    try {
      const data = await fetch(TrendingCoins(currency), { method: "GET" });
      const parsedData = await data.json();
      console.log(parsedData);
      setData(parsedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendingCoins();
  }, [currency]);

  const items = data.map((coin, key) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link key={key} className="flex flex-col items-center cursor-pointer">
        <img
          src={coin?.image}
          alt={coin.name}
          className="w-1/4"
          //   style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span className="text-2xl font-semibold">
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
      itemsFit: "contain",
    },
  };
  return (
    <div className="w-full flex items-center">
      {" "}
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        // responsive={4}
        items={items}
        autoPlay={true}
      />
    </div>
  );
}

export default Carousal;

import { createContext, useContext, useEffect, useState } from "react";

export const CryptoContext = createContext({});

export function CryptoContextProvider({ children }) {
  const [currency, setCurrency] = useState("inr");
  const [symbol, setSymbol] = useState("₹");
  const [alterSymbol, setAlterSymbol] = useState("$");

  useEffect(() => {
    if (currency === "inr") {
      setSymbol("₹");
      setAlterSymbol("$");
    } else if (currency === "usd") {
      setSymbol("$");
      setAlterSymbol("₹");
    }
  }, [currency]);

  return (
    <CryptoContext.Provider
      value={{ currency, setCurrency, symbol, alterSymbol }}
    >
      {children}
    </CryptoContext.Provider>
  );
}

export const CryptoState = () => {
  return useContext(CryptoContext);
};

import { createContext, useEffect, useState } from "react";

export const MyContext = createContext({});

export const Context = ({ children }) => {
  const [data, setData] = useState([]);

  const consultarApi = async () => {
    const URL = "https://rickandmortyapi.com/api/character";
    const response = await fetch(URL);
    const data = await response.json();
    setData(data.results);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return <MyContext.Provider value={{ data }}>{children}</MyContext.Provider>;
};

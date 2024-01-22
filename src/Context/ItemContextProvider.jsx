import React from "react";
import { useContext, useEffect, useState } from "react";
import ItemContext from "../Context/ItemContext";

const ItemContextProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  

  const options = {
    method: "GET",
  };
  const fetchData = async () => {
    try {
      const url = "https://api.tvmaze.com/search/shows?q=all";
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ItemContext.Provider
      value={{
        data,
        loading,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
export default ItemContextProvider;

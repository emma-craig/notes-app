import { useEffect, useState } from "react";

const useFetchCocktails = async (url: string) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, {
        method: "GET",
        mode: "cors", // <---
        cache: "default",
      });
      try {
        const res = await response.json();
        console.log(res);

        setData(res);
      } catch (error) {
        console.log(error);
      }

    };
    fetchData();
  }, [url]);
  return { data };
};

export default useFetchCocktails;

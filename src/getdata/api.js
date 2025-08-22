import { useEffect } from "react";
import {useGlobalContext} from "./context";

const ApiCalling = () => {

    const contextValue = useGlobalContext();
  const url = "https://hn.algolia.com/api/v1/search_by_date?search?html";

  //using fetch function to get data from API
  const fetchData = async (api) => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //calling function using useeffect
  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      <h2>ApiCalling</h2>
      <h2>{contextValue}</h2>
    </>
  );
};

export default ApiCalling;

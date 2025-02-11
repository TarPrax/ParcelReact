import { useState, useEffect } from "react";
import { Res_Data_Api } from "../constants";

const useRestaurant = (resId) => {
  const [res, setRes] = useState(null);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(Res_Data_Api + resId); // add id here
    console.log(Res_Data_Api + resId);
    const json = await data.json();
    // console.log(json);

    //You have to check the API data which this returns?
    setRes(json.data?.cards[2]?.card?.card?.info);
    //Check and Proceedgit
  }

  return res;
};

export default useRestaurant;

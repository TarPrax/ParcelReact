import { useState, useEffect } from "react";

const useResDeatails = (resId) => {
  const [res, setRes] = useState(null);
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(Res_Data_Api + resId); // add id here
    console.log(Res_Data_Api + resId);
    const json = await data.json();
    // console.log(json);
    setRes(son.data?.cards[2]?.card?.card?.info);
    //You have to check the API data which this returns?
  }

  return res;
};
export default useResDeatails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN, Res_Data_Api } from "../constants";
const RestaurantMenu = () => {
  const [res, setRes] = useState(null);

  const param = useParams();
  useEffect(() => {
    getRestaurantData();
  });
  async function getRestaurantData() {
    const data = await fetch(Res_Data_Api);
    const json = await data.json();
    console.log(json);

    //You have to check the API data which this returns?
    setRes(json.data);
    //Check and Proceedgit
  }
  if (!res) {
    return null;
  } else
    return (
      <>
        <div>
          <h1>This is dynamically prdouced route</h1>
          <h3>Dynamic data from : {param.id}</h3>
          <h2>{res.name}</h2>
          <img src={IMG_CDN + res.cloudinaryImageId} />
          <h3>{res.area}</h3>
          <h3>{res.city}</h3>
          <h3>{res.avgRating} stars</h3>
        </div>

        <div>
          <h1>Menue</h1>
          <ul>
            {Object.values(res?.menu?.items).map((item) => {
              <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      </>
    );
};
export default RestaurantMenu;

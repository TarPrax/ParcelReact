import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN, Res_Data_Api } from "../constants";
import useRestaurant from "../Utils/RestaurantData";
const RestaurantMenu = () => {
  const param = useParams();

  const res = useRestaurant(param.id);

  if (!res) {
    return null;
  } else
    return (
      <>
        <div>
          <h1>This is dynamically prdouced route</h1>
          <h3>Dynamic data from : {param.id}</h3>
          <h2>{res.name}</h2>
          <img src={IMG_CDN + res?.cloudinaryImageId} />
          <h3>{res?.locality}</h3>
          <h3>{res.city}</h3>
          <h3>{res.avgRating} stars</h3>
        </div>

        <div>
          <h1>Menu</h1>
          <ul>
            {/* {Object.values(res?.menu?.items).map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })} */}
          </ul>
        </div>
      </>
    );
};
export default RestaurantMenu;

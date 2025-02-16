import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN, Res_Data_Api } from "../constants";
import useRestaurant from "../Utils/RestaurantData";
import useMenu from "../Utils/MenuData";
const RestaurantMenu = () => {
  const param = useParams();

  const res = useRestaurant(param.id);
  const Menu = useMenu();

  console.log(Menu);

  if (!res) {
    return null;
  } else
    return (
      <>
        <div className="flex p-4">
          <div className="border-amber-300 rounded-2xl w-64 border-2 m-2 mr-8 p-2 h-fit ">
            <h1 className="text-3xl my-1">Order happiness from {res.name} </h1>
            <h3>Dynamic data from : {param.id}</h3>
            <h2>{res.name}</h2>
            <img
              className="border-pink-200 rounded-3xl"
              src={IMG_CDN + res?.cloudinaryImageId}
            />
            <h3>{res?.locality}</h3>
            <h3>{res.city}</h3>
            <h3>{res.avgRating} stars</h3>
          </div>

          <div>
            <h1 className="text-2xl mb-2">Menus</h1>
            <ul>
              {Menu.map((item) => {
                return (
                  <li key={item.id} className="text-md m-2 hover:bg-gray-100">
                    {item.name}{" "}
                    <button className="bg-green-200 border ml-2 hover:bg-green-300 text-xs cursor-pointer rounded-md p-1">
                      Add me
                    </button>{" "}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
};
export default RestaurantMenu;

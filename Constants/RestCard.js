import { useState, useEffect, useContext } from "react";
import { Res } from "./Restaurants";
import { IMG_CDN } from "./constants.js";
import { Res_Api } from "./constants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import userContext from "./Utils/userContex.js";
const RestCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  totalRatingsString,
}) => {
  const { user } = useContext(userContext);
  return (
    <div className="w-56 h-105 p-4 m-2 shadow-lg bg-pink-50 rounded-3xl">
      <img className="rounded-4xl" src={IMG_CDN + cloudinaryImageId}></img>
      <h3 className="text-xl font-bold ">{name}</h3>
      <h3>{cuisines.slice(0, 4).join(", ")}</h3>
      <h3>
        {avgRating} Star . {totalRatingsString} Ratings
      </h3>
      <h5>{user.name}</h5>
    </div>
  );
};

// Will be tested on local PC
// async function getResData() {
//   const response = await fetch(Res_Api);
//   const data = await response.json();
//   console.log(data);
// }
// getResData();
//Tested working fine.

function filterData(searchText, resData) {
  return resData.filter((rest) =>
    rest.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const NoRestDisplay = () => {
  return <h1>No Matching Restaurants to show </h1>;
};

async function getRestaurantdata() {
  const response = await fetch(Res_Api);
  const data = await response.json();
}

getRestaurantdata();
export const DisplayCards = () => {
  // const searchTxt = "KFC";
  const [resData, setResData] = useState(Res);
  const [disp, setDisp] = useState();
  const [searchTxt, setSearchText] = useState("");
  const [act, setAct] = useState("false");

  useEffect(() => {
    setResData(Res);
  }, [searchTxt]);

  return resData.length == 0 ? (
    <NoRestDisplay />
  ) : (
    <>
      <div className="my-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTxt}
          className="border p-2 rounded mr-1"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn bg-purple-800 text-white rounded-lg p-1 hover:bg-violet-600 "
          onClick={() => {
            const data = filterData(searchTxt, resData);
            setResData(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="place-content-around flex flex-wrap bg-purple-100">
        {resData.length > 0 ? (
          resData.map((rest) => {
            return (
              <Link to={"/restaurants/" + rest.info.id} key={rest.info.id}>
                <RestCard {...rest.info} key={rest.info.id}></RestCard>
              </Link>
            );
          })
        ) : (
          <NoRestDisplay />
        )}

        {}
      </div>
    </>
  );
};

export default RestCard;

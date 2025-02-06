import { useState, useEffect } from "react";
import { Res } from "./Restaurants";
import { IMG_CDN } from "./constants.js";
import { Res_Api } from "./constants.js";
import Shimmer from "./Shimmer.js";
const RestCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  totalRatingsString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h3>{cuisines.slice(0, 4).join(", ")}</h3>
      <h3>
        {avgRating} Star . {totalRatingsString} Ratings
      </h3>
    </div>
  );
};

// Will be tested on local PC
// async function getResData() {
//   const response = await fetch(Res_Api, mode: 'no-cors');
//   const data = await response.json();
//   console.log(data);
// }
// getResData();

function filterData(searchText, resData) {
  return resData.filter((rest) =>
    rest.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const NoRestDisplay = () => {
  return <h1>No Matching Restaurants to show </h1>;
};

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
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchTxt}
          className="search-input"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, resData);
            setResData(data);
          }}
        >
          Search
        </button>
      </div>
      <noRestDisplay />
      <div className="rest-list">
        {resData.length > 0 ? (
          resData.map((rest) => {
            return <RestCard {...rest.info} key={rest.info.id}></RestCard>;
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

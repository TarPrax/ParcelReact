import { useState } from "react";
import { Res } from "./Restaurants";
import { IMG_CDN } from "./constants.js";

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

function filterData(searchText, resData) {
  return resData.filter((rest) => rest.info.name.includes(searchText));
}





export const DisplayCards = () => {
  // const searchTxt = "KFC";
  const [resData, setResData] = useState(Res);
  const [searchTxt, setSearchText] = useState("");
  const [act, setAct] = useState("fasle");


  return (
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

      <div className="rest-list">
        {resData.map((rest) => {
          return <RestCard {...rest.info} key={rest.info.id}></RestCard>;
        })}
      </div>
    </>
  );
};

export default RestCard;

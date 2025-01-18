import { Res } from "./Restaurants";
import {IMG_CDN} from "./constants.js"


  
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

export const DisplayCards = () => {
  return (
    <div className="rest-list">
      {Res.map((rest) => {
        return <RestCard {...rest.info} key={rest.info.id}></RestCard>;
      })}
    </div>
  );
};

export default RestCard;

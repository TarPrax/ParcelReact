import { Res } from "./Restaurants";

const url =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const RestCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  totalRatingsString,
}) => {
  return (
    <div className="card">
      <img src={url + cloudinaryImageId}></img>
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

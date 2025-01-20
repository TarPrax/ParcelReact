import { useState } from "react";
const [search, setSearch] = useState("Search Here");
export const SearchFunction = () => {
  const inputField = "Please Search Here";

  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e);
        }}
      ></input>

      <button type="submit">Search here + {search}</button>
    </div>
  );
};

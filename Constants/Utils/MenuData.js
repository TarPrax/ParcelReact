import { useEffect, useState } from "react";
import { Menu_Api } from "../constants";

const useMenu = () => {
  const [x, setX] = useState();
  useEffect(() => {
    (async function () {
      const res = await fetch(Menu_Api);
      const data = await res.json();
      setX(data.recipes);
    })();
  }, []);
  return x;
};
export default useMenu;

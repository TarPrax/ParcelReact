import { useState, useEffect } from "react";

const useIsOnline = () => {
  const [value, setValue] = useState(true);

  useEffect(() => {
    const handelOnline = () => {
      setValue(true);
    };
    const handelOffline = () => {
      setValue(false);
    };
    window.addEventListener("online", handelOnline);

    window.addEventListener("offline", handelOffline);

    return () => {
      window.removeEventListener("online", handelOnline);
      window.removeEventListener("online", handelOffline);
    };
  }, []);

  return value;
};

export default useIsOnline;

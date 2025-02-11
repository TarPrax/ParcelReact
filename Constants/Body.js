import { useState } from "react";
import { DisplayCards } from "./RestCard";
import useIsOnline from "./Utils/Online";

export const Body = () => {
  const isOnline = useIsOnline();

  return <>{isOnline ? <DisplayCards /> : <h1>This is offline</h1>}</>;
};

export default Body;

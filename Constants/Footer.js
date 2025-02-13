import { useContext } from "react";
import userContext from "./Utils/userContex";

const Footer = () => {
  const { user } = useContext(userContext);

  return <h1>This is footer : made by : {user.email} </h1>;
};
export default Footer;

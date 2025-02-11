
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass.js";
const About = () => {
  return (
    <>
      <h1>Thi is Test Page</h1>
      <p>This is About Page</p>
<Profile name="Tarun Singh" />
      <Outlet/>
    </>
  );
};

export default About;

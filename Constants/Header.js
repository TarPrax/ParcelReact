import { useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "./Utils/Online";

const Header = () => {
  const [log, setLog] = useState(true);
  const userStatus = useIsOnline();

  return (
    <div className="flex justify-between bg-pink-50 shadow-md  sm:bg-blue-50 md:bg-yellow-100">
      <Link to="/">
        <img
          className="h-24 px-2 py-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlbz7UxtD02us1-KilNMvEeHSG5jP3L6Yyw&s"
        ></img>
      </Link>

      <ul className="flex px-4 py-4">
        <Link to="/" className="px-2">
          <li>Home</li>
        </Link>
        <Link to="/about" className="px-2">
          <li>About Us</li>
        </Link>
        <Link to="/contact" className="px-2">
          <li>Contact</li>
        </Link>

        <Link to="/cart" className="px-2">
          <li>Cart</li>
        </Link>

        <Link to="/instamart" className="lpx-2">
          <li>Instamart</li>
        </Link>
      </ul>
      <div className="loginButton">
        <h4> {userStatus ? "online" : "offline"} </h4>

        {log ? (
          <button
            onClick={() => {
              setLog(false);
            }}
          >
            {" "}
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setLog(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;

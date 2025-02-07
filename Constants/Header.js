import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [log, setLog] = useState(true);
  return (
    <div className="headr">
      <a href="/">
        <img
          className="logo-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlbz7UxtD02us1-KilNMvEeHSG5jP3L6Yyw&s"
        ></img>
      </a>
      <ul className="items">
        <li>
          <Link to="/"></Link>Home
        </li>
        <li>
          <Link to="/about"></Link>About us
        </li>
        <li>
          <Link to="/contact"></Link>Contact
        </li>
        <li>
          <Link to="/cart"></Link>Cart
        </li>
      </ul>
      <div className="loginButton">
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

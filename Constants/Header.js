import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [log, setLog] = useState(true);
  return (
    <div className="headr">
      <Link to="/">
        <img
          className="logo-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlbz7UxtD02us1-KilNMvEeHSG5jP3L6Yyw&s"
        ></img>
      </Link>

      <ul className="items">
        <Link to="/" className="links">
          <li>Home</li>
        </Link>
        <Link to="/about" className="links">
          <li>About Us</li>
        </Link>
        <Link to="/contact" className="links">
          <li>Contact</li>
        </Link>

        <Link to="/cart" className="links">
          <li>Cart</li>
        </Link>
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

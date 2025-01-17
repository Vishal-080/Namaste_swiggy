import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState } from "react";

const Header = () => {
  const status = useOnlineStatus();

  // console.log(status, "hey status");
  return (
    <div className="flex justify-between items-center text-black bg-[#00ffff] px-3">
      <div>
        <img
          className="h-16"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul className="flex p-1 text-md font-medium">
          <li className="m-2.5 p-1">Online Status : {status ? "🟢" : "🔴"}</li>
          <li className="m-2.5 p-1">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2.5 p-1">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-2.5 p-1">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="m-2.5 p-1">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="m-2.5 p-1">Cart</li>
          <li className="m-2.5 p-1">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

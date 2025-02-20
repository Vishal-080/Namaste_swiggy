import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const status = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  // use selector is used to subscribe the store

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
          <li className="m-2.5 p-1 font-bold">
            <Link to="/cart"> Cart ({cartItems.length}-items) </Link>
          </li>
          <li className="m-2.5 p-1">Login</li>
          <li className="m-2.5 p-1 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

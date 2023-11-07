import React, { useContext, useEffect, useState } from "react";
import LOGO_URL from "../assests/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // selector is a hook under react. it gives access to the store.
  // we are subscribing to the store using a Selector.
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between items-center">
      <div className="logo-container">
        <img className="w-26 ml-6" src={LOGO_URL} width="60px" height="50px" />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-2 sm:gap-4 lg:gap-6 p-4 m-4 items-center text-sm md:text-base">
          <li>Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart" className="flex">
              <AiOutlineShoppingCart size="1.3rem" />
              <sup className="text-sm font-semibold ">{cartItems.length}</sup>
            </Link>
          </li>
          <button
            className="bg-green-600 px-3 py-1 text-white rounded-sm hover:bg-green-700"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="text-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

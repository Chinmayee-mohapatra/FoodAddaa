import React, { useEffect } from "react";
import LOGO_URL from "../assests/logo.png";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import LocationConfirmation from "./mainSections/LocationConfirmation";

const Header = ({ isLoginForm, setLoginForm }) => {
  const onlineStatus = useOnlineStatus();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleClick = () => {
    setLoginForm();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between items-center">
      <div className="logo-container ">
        <Link to="/browse/">
          <img
            className="w-26 ml-6 cursor-pointer"
            src={LOGO_URL}
            width="60px"
            height="50px"
          />
        </Link>
      </div>

      {!user && (
        <div className="flex flex-row">
          <button
            className={`h-12 py-2 px-4 ${
              isLoginForm ? `bg-orange-600` : `bg-orange-400`
            }  text-white text-lg font-medium`}
            onClick={handleClick}
          >
            Login
          </button>
          <button
            className={`h-12 py-2 px-4 ${
              isLoginForm ? `bg-slate-600` : `bg-black`
            } bg-black text-white text-lg font-medium`}
            onClick={handleClick}
          >
            SignUp
          </button>
        </div>
      )}

      {user && (
        <div className="flex items-center">
          <ul className="flex gap-2 sm:gap-4 lg:gap-6 p-4 m-4 items-center text-sm md:text-base">
            <li className="relative">
              <LocationConfirmation />
            </li>
            <li>Status : {onlineStatus ? "✅" : "🔴"}</li>
            <li className="hover:scale-110 duration-100">
              <Link to="/browse/">Home</Link>
            </li>
            <li className="hover:scale-110 duration-100">
              <Link to="/browse/about">About</Link>
            </li>
            <li className="hover:scale-110 duration-100">
              <Link to="/browse/contact">Contact</Link>
            </li>
            <li className="hover:scale-110 duration-100">
              <Link to="/browse/grocery">Grocery</Link>
            </li>
            <li className="hover:scale-110 duration-100">
              <Link to="/browse/cart" className="flex">
                <AiOutlineShoppingCart size="1.3rem" />
                <sup className="text-sm font-semibold ">{cartItems.length}</sup>
              </Link>
            </li>
            <button
              className="bg-green-600 px-3 py-1 text-white rounded-sm hover:bg-green-700"
              onClick={() => {
                handleSignOut();
              }}
            >
              Logout
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

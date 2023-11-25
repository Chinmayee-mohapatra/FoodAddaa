import React, { useRef, useState } from "react";
import LOGO_URL from "../assests/logo.png";
import { LOGIN_CDN_URL, USER_AVATAR } from "../utils/constants";
import Animmation from "./Animmation";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import Header from "./Header";

const Login = () => {
  const [isLoginForm, setLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isLoginForm) {
      // SIGNUP logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              //Here, we are trying to get the {uid, email, displayname, photoURL} from the updated user. So we need to use auth.currentUser
              // Else if using user we get the un-updated value.
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // SIGNIN logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <div className="w-full flex gap-2">
        <div className="w-1/2 flex flex-col justify-evenly items-center">
          <div className="w-full flex flex-row items-center justify-between px-20">
            <Header
              isLoginForm={isLoginForm}
              setLoginForm={() => setLoginForm(!isLoginForm)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-5xl tracking-normal font-bold text-slate-800">
              <Animmation />
            </h1>
            <p className="text-2xl">
              Order food from favourite restaurants near you.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className={`w-3/4 flex flex-col gap-4}`}
          >
            {!isLoginForm && (
              <input
                required
                ref={userName}
                type="text"
                placeholder="User Name"
                className="w-full h-12 p-2 border border-slate-500 text-lg"
              />
            )}
            <input
              required
              ref={email}
              type="email"
              placeholder="Email Address"
              className="w-full h-12 p-2 border border-slate-500 text-lg"
            />
            <input
              required
              ref={password}
              type="password"
              placeholder="Enter password"
              className="w-full h-12 p-2 border border-slate-500 text-lg"
            />
            {<p className="my-2 text-red-800">{errorMessage}</p>}

            <button
              className="w-1/4 h-12 p-2 mx-auto bg-orange-500 text-white text-lg font-medium"
              onClick={() => handleButtonClick()}
            >
              {isLoginForm ? "Login" : "SignUp"}
            </button>
          </form>
        </div>

        <div className="w-1/2">
          <img src={LOGIN_CDN_URL} alt="main page image" />
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Login from "./components/Login";

// lazy loading of data
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={appStore}>
        <Login />
      </Provider>
    ),
  },
  {
    path: "/browse",
    element: <AppLayout />,
    children: [
      {
        path: "/browse",
        element: <Body />,
      },
      {
        path: "/browse/about",
        element: <About />,
      },
      {
        path: "/browse/contact",
        element: <ContactUs />,
      },
      {
        path: "/browse/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/browse/restaurants/:resID",
        element: <RestaurantMenu />,
      },
      {
        path: "/browse/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

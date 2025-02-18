import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Constants/Routes/Error";
import { Provider } from "react-redux";
// import Layout from "./Constants/Layout";
// import { Body } from "./Constants/Body";
import Header from "./Constants/Header";
import Body from "./Constants/Body";
import Footer from "./Constants/Footer";
import About from "./Constants/Routes/About";
import Contact from "./Constants/Routes/Contact";
import RestaurantMenu from "./Constants/Routes/RestaurantMenu";
import Profile from "./Constants/Routes/Profile";
import Shimmer from "./Constants/Shimmer";
import UserContext from "./Constants/Utils/userContex";
import store from "./Constants/Routes/Store.js";
import Cart from "./Constants/Routes/Cart.js";

const Instamart = lazy(() =>
  import("./Constants/Utils/LazyComponents/Instamart")
);
// Define your component

const RootElement = () => {
  const [user, setUser] = useState({
    name: "New Name",
    email: "NewEmail@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Still waiting</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

// Find the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the component
root.render(<RouterProvider router={appRouter} />);

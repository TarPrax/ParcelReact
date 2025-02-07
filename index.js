import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Constants/Routes/Error";

// import Layout from "./Constants/Layout";
// import { Body } from "./Constants/Body";
import Header from "./Constants/Header";
import Body from "./Constants/Body";
import Footer from "./Constants/Footer";
import About from "./Constants/Routes/About";
import Contact from "./Constants/Routes/Contact";
import RestaurantMenu from "./Constants/Routes/RestaurantMenu";
// Define your component

const RootElement = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
    ],
  },
]);

// Find the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the component
root.render(<RouterProvider router={appRouter} />);

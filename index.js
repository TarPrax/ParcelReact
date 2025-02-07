import React from "react";
import ReactDOM from "react-dom/client";
const cors = require("cors");
// import Layout from "./Constants/Layout";
// import { Body } from "./Constants/Body";
import Header from "./Constants/Header";
import Body from "./Constants/Body";
import Footer from "./Constants/Footer";
// Define your component

const RootElement = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer/>
    </>
  );
};

// Find the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the component
root.render(<RootElement />);

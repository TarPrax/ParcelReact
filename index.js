import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Constants/Layout";
// Define your component


const RootElement = () => {
  return (
    <>
    <Layout/>
    </>
  );
};

// Find the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the component
root.render(<RootElement />);

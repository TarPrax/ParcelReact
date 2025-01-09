import React from "react";
import ReactDOM from "react-dom/client";

// Define your component
const NewEle = () => {
  return (
    <div>
      <h1>This is the heading</h1>
      <h3>This is a subheading</h3>
    </div>
  );
};

// Find the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the component
root.render(<NewEle />);

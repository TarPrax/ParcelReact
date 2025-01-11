import React from "react";
import ReactDOM from "react-dom/client";

// Define your component
const Header =()=>{
return (

<div className="headr">
<a href="/">
<img className="logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlbz7UxtD02us1-KilNMvEeHSG5jP3L6Yyw&s"></img>
</a>
<ul className="items">

<li>Home</li> 
<li>Offers</li>  
<li>Help</li>  
<li>Cart</li>   

</ul>

</div>

)


}


const RootElement = () => {
  return (
    <>
    <Header/>
    {/* <Body/>
    <Footer/> */}
    </>
  );
};

// Find the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the component
root.render(<RootElement />);

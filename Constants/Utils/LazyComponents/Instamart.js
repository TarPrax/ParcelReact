
import { useState } from "react";
const Section = ({ name, description,display,setDisplay }) => {
  return (
    <>
      <div className="border-2  p-4 m-4 border-amber-600">
        <h1>{name} </h1>
      { (display===name) && <p>{description}</p>}
        <button  onClick={()=>{
          setDisplay(name);
        }} className="border-2 rounded-4 m-2 p-1">Show More </button>
        <button onClick={()=>{
          setDisplay(null);
        }} className="border-2 rounded-4 p-1">Hide</button>
      </div>
    </>
  );
};

const Instamart = () => {
  const[display,setDisplay]=useState(null)
  return (
    <>
      <h1>This is Instamart</h1>
      <h2>Enter your current location</h2>

      <Section
        name="first"
        description="about us page Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, turpis sit amet interdum tempor, felis erat luctus justo, sed dictum sem elit ac nulla. Curabitur vel ligula eu metus sodales facilisis. Nam euismod convallis nisl, eget euismod enim tempor sed. Vivamus venenatis tortor nec nisl fermentum, at malesuada nisi consequat. Etiam ac nisl eu risus hendrerit gravida. Ut volutpat mauris et nibh volutpat, sit amet faucibus augue aliquam. Aliquam erat volutpat. Ut auctor dui ac magna maximus fermentum. Fusce id risus sed lectus consectetur laoreet" display={display} setDisplay={setDisplay}
      />

      <Section
        name="second"
        description="about us page Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, turpis sit amet interdum tempor, felis erat luctus justo, sed dictum sem elit ac nulla. Curabitur vel ligula eu metus sodales facilisis. Nam euismod convallis nisl, eget euismod enim tempor sed. Vivamus venenatis tortor nec nisl fermentum, at malesuada nisi consequat. Etiam ac nisl eu risus hendrerit gravida. Ut volutpat mauris et nibh volutpat, sit amet faucibus augue aliquam. Aliquam erat volutpat. Ut auctor dui ac magna maximus fermentum. Fusce id risus sed lectus consectetur laoreet" display={display} setDisplay={setDisplay}
      />

      <Section
        name="third"
        description="about us page Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, turpis sit amet interdum tempor, felis erat luctus justo, sed dictum sem elit ac nulla. Curabitur vel ligula eu metus sodales facilisis. Nam euismod convallis nisl, eget euismod enim tempor sed. Vivamus venenatis tortor nec nisl fermentum, at malesuada nisi consequat. Etiam ac nisl eu risus hendrerit gravida. Ut volutpat mauris et nibh volutpat, sit amet faucibus augue aliquam. Aliquam erat volutpat. Ut auctor dui ac magna maximus fermentum. Fusce id risus sed lectus consectetur laoreet" display={display} setDisplay={setDisplay}
      />

      <Section
        name="fourth"
        description="about us page Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, turpis sit amet interdum tempor, felis erat luctus justo, sed dictum sem elit ac nulla. Curabitur vel ligula eu metus sodales facilisis. Nam euismod convallis nisl, eget euismod enim tempor sed. Vivamus venenatis tortor nec nisl fermentum, at malesuada nisi consequat. Etiam ac nisl eu risus hendrerit gravida. Ut volutpat mauris et nibh volutpat, sit amet faucibus augue aliquam. Aliquam erat volutpat. Ut auctor dui ac magna maximus fermentum. Fusce id risus sed lectus consectetur laoreet" display={display} setDisplay={setDisplay}
      />
    </>
  );
};

export default Instamart;

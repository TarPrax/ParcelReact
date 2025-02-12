const Section = ({ name, description }) => {
  return (
    <>
      <div className="border-2 border-indigo p-4 m-4">
        <h1>{name} </h1>
        <p>{description}</p>
        <button className="border-2 rounded-4 m-2 p-1">Show More </button>
        <button className="border-2 rounded-4 p-1">Hide</button>
      </div>
    </>
  );
};

const Instamart = () => {
  return (
    <>
      <h1>This is Instamart</h1>
      <h2>Enter your current location</h2>

      <Section
        name="first"
        description="about us page Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, turpis sit amet interdum tempor, felis erat luctus justo, sed dictum sem elit ac nulla. Curabitur vel ligula eu metus sodales facilisis. Nam euismod convallis nisl, eget euismod enim tempor sed. Vivamus venenatis tortor nec nisl fermentum, at malesuada nisi consequat. Etiam ac nisl eu risus hendrerit gravida. Ut volutpat mauris et nibh volutpat, sit amet faucibus augue aliquam. Aliquam erat volutpat. Ut auctor dui ac magna maximus fermentum. Fusce id risus sed lectus consectetur laoreet"
      />

      <Section
        name="second"
        description="about us page Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, turpis sit amet interdum tempor, felis erat luctus justo, sed dictum sem elit ac nulla. Curabitur vel ligula eu metus sodales facilisis. Nam euismod convallis nisl, eget euismod enim tempor sed. Vivamus venenatis tortor nec nisl fermentum, at malesuada nisi consequat. Etiam ac nisl eu risus hendrerit gravida. Ut volutpat mauris et nibh volutpat, sit amet faucibus augue aliquam. Aliquam erat volutpat. Ut auctor dui ac magna maximus fermentum. Fusce id risus sed lectus consectetur laoreet"
      />

      <Section
        name="third"
        description="about us page Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, turpis sit amet interdum tempor, felis erat luctus justo, sed dictum sem elit ac nulla. Curabitur vel ligula eu metus sodales facilisis. Nam euismod convallis nisl, eget euismod enim tempor sed. Vivamus venenatis tortor nec nisl fermentum, at malesuada nisi consequat. Etiam ac nisl eu risus hendrerit gravida. Ut volutpat mauris et nibh volutpat, sit amet faucibus augue aliquam. Aliquam erat volutpat. Ut auctor dui ac magna maximus fermentum. Fusce id risus sed lectus consectetur laoreet"
      />

      <Section
        name="fourth"
        description="about us page Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, turpis sit amet interdum tempor, felis erat luctus justo, sed dictum sem elit ac nulla. Curabitur vel ligula eu metus sodales facilisis. Nam euismod convallis nisl, eget euismod enim tempor sed. Vivamus venenatis tortor nec nisl fermentum, at malesuada nisi consequat. Etiam ac nisl eu risus hendrerit gravida. Ut volutpat mauris et nibh volutpat, sit amet faucibus augue aliquam. Aliquam erat volutpat. Ut auctor dui ac magna maximus fermentum. Fusce id risus sed lectus consectetur laoreet"
      />
    </>
  );
};

export default Instamart;

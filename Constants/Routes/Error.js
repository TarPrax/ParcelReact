import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPS! Some Error Occured</h1>
      <p>This is on US!!</p>
      <h2>{err.status}</h2>
    </div>
  );
};
export default Error;

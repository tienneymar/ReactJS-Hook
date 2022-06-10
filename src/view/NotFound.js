import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  let history = useHistory();
  const handleBackHome = () => {
    history.push("/");
  };
  return (
    <>
      <div className="not-found-container"></div>
      <h3>404 Not Found</h3>
      <h4>Error Not Page</h4>
      <button onClick={handleBackHome} className="btn btn-danger">
        Go To Home
      </button>
    </>
  );
};
export default NotFound;

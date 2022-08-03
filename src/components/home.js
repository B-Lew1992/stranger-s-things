import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Stranger's Things!</h1>
      <Link to="/login"><button type="view">Log In</button></Link>
    </div>
  );
}

export default Home;

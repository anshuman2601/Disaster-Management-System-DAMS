import React from "react";
import Disaster from "./Disaster";
import Items from "./Items";
import Registration from "./Registration";

function Home() {
  return (
    <div className="home-page">
      <Disaster />
      <Items />
    </div>
  );
}

export default Home;

// https://www.bezkoder.com/react-material-ui-examples-crud/

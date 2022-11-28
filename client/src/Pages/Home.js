import React from "react";
import Disaster from "./Disaster";
import Items from "./Items";
import Request from "./Request";
import Response from "./Response";
import Map from "./Map";

function Home() {
  return (
    <div className="home-page">
      <Disaster />
      <Items />
      <Request />
      <Map />
    </div>
  );
}

export default Home;

// https://www.bezkoder.com/react-material-ui-examples-crud/

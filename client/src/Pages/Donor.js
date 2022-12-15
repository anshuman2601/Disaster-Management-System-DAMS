import React from "react";
import Disaster from "./Disaster";
import Request from "./Request";
import Response from "./Response";
import Items from "./Items";
import Pledge from "./Pledge";

function Donor() {
  return (
    <div className="donor-page">
      <Disaster />
      <Request />
      <Items />
      <Pledge />
    </div>
  );
}

export default Donor;
